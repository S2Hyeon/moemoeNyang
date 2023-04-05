package com.ssafy.moemoe.api.service.cat;

import com.ssafy.moemoe.api.request.board.BoardSaveReq;
import com.ssafy.moemoe.api.request.cat.CatInfoReq;
import com.ssafy.moemoe.api.response.board.BoardLoadResp;
import com.ssafy.moemoe.api.response.board.BoardSpotResp;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.service.S3Uploader;
import com.ssafy.moemoe.api.service.board.BoardService;
import com.ssafy.moemoe.api.service.university.UniversityService;
import com.ssafy.moemoe.db.entity.board.Board;
import com.ssafy.moemoe.db.entity.cat.Cat;
import com.ssafy.moemoe.db.entity.follow.Follow;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.entity.university.University;
import com.ssafy.moemoe.db.repository.board.BoardRepository;
import com.ssafy.moemoe.db.repository.board.ReactionRepository;
import com.ssafy.moemoe.db.repository.cat.CatCustomRepository;
import com.ssafy.moemoe.db.repository.cat.CatRepository;
import com.ssafy.moemoe.db.repository.follow.FollowRepository;
import com.ssafy.moemoe.db.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class CatServiceImpl implements CatService{

    private final Logger LOGGER = LoggerFactory.getLogger(CatServiceImpl.class);

    private final CatRepository catRepository;
    private final CatCustomRepository catCustomRepository;
    private final FollowRepository followRepository;
    private final UniversityService universityService;
    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final ReactionRepository reactionRepository;
    private final BoardService boardService;
    private final S3Uploader s3Uploader;


    @Override
    public boolean insertCat(UUID memberId, CatInfoReq catInfoReq) {

        Member member = memberRepository.findByMemberId(memberId);
        University university = universityService.getUniversity(catInfoReq.getUniversityId());
        if(member == null || university == null)
            return false;

        LOGGER.info("========insertCat : memberId {}, catInfoReq {}", memberId, catInfoReq);

        // S3에 이미지 등록
        MultipartFile multipartFile = catInfoReq.getImage();
        String img;
        try {
            img = s3Uploader.upload(multipartFile, "cat");
        }
        catch (IOException e) {
            throw new IllegalArgumentException("파일 업로드에 문제가 발생했습니다.(cat)");
        }
        LOGGER.info("================url===============\n" + img);

        Cat cat = new Cat(catInfoReq, university, img);
        catRepository.save(cat);

        BoardSaveReq boardSaveReq = new BoardSaveReq(cat, catInfoReq.getLat(), catInfoReq.getLng());
        boardService.createBoard(memberId, multipartFile, boardSaveReq);

        return true;
    }

    @Override
    public List<CatListResp> getCats(UUID memberId, Long universityId) {
        Member member = memberRepository.findByMemberId(memberId);
        University university = universityService.getUniversity(universityId);
        if(member == null || university == null)
            return null;

        return catCustomRepository.getCats(memberId, universityId);
    }

    @Override
    public CatDetailResp getCat(UUID memberId, Long catId) {
        Member member = memberRepository.findByMemberId(memberId);
        Cat cat = catRepository.findCatByCatId(catId).orElse(null);
        Board board = boardRepository.findTop1ByCat_CatIdOrderByCreatedAtDesc(catId).orElse(null);
        Optional<Follow> follow = followRepository.findByMemberAndCat(memberId, catId);
        LOGGER.info("=============getCat=================\nmember : {}, cat : {}, board : {}", member, cat, board);
        Long isFollowing = follow.isEmpty() ? 0L:1;
        if(board == null){
            return toCatDetailResp(cat, null, null, isFollowing);
        } else {
            return toCatDetailResp(cat, board.getLat(), board.getLng(), isFollowing);
        }
    }

    @Override
    public List<BoardSpotResp> getCatSpots(UUID memberId, Long catId) {
        Member member = memberRepository.findByMemberId(memberId);
        Cat cat = catRepository.findCatByCatId(catId).orElse(null);
        List<Board> boards = boardRepository.findTop10ByCat_CatIdOrderByCreatedAtDesc(catId);

        if(member == null || cat == null || boards == null)
            return null;

        List<BoardSpotResp> boardSpotResps = new ArrayList<>();
        for(Board board : boards) {
            boardSpotResps.add(new BoardSpotResp(board));
        }
        return boardSpotResps;
    }

    @Override
    public List<BoardLoadResp> getCatBoards(UUID memberId, Long catId) {
        Cat cat = catRepository.findCatByCatId(catId).orElse(null);
        List<Board> boards = boardRepository.findByCat_CatIdOrderByCreatedAtDesc(catId);
        Optional<Follow> follow = followRepository.findByMemberAndCat(memberId, catId);

        List<BoardLoadResp> catBoards = new ArrayList<>();
        for(Board board : boards) {
//            board.getCat()
            catBoards.add(new BoardLoadResp(board));
        }

        for (BoardLoadResp cur : catBoards) {
            cur.setMyEmotion(reactionRepository.checkReation(memberId, cur.getBoardId()));
        }
        return catBoards;
    }
}

package com.ssafy.moemoe.api.service.board;

import com.ssafy.moemoe.api.request.board.BoardSaveReq;
import com.ssafy.moemoe.api.request.board.ReactionDetailReq;
import com.ssafy.moemoe.api.request.board.TagSaveReq;
import com.ssafy.moemoe.api.response.board.BoardLoadResp;
import com.ssafy.moemoe.api.response.board.BoardResp;
import com.ssafy.moemoe.db.entity.Cat;
import com.ssafy.moemoe.db.entity.board.Board;
import com.ssafy.moemoe.db.entity.board.Reaction;
import com.ssafy.moemoe.db.entity.board.Tag;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.entity.university.University;
import com.ssafy.moemoe.db.repository.board.BoardRepository;
import com.ssafy.moemoe.db.repository.board.ReactionRepository;
import com.ssafy.moemoe.db.repository.board.TagRepository;
import com.ssafy.moemoe.db.repository.cat.CatRepository;
import com.ssafy.moemoe.db.repository.member.MemberRepository;
import com.ssafy.moemoe.db.repository.university.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Board 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("BoardService")
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BoardServiceImpl implements BoardService {
    @Autowired
    BoardRepository boardRepository;
    @Autowired
    TagRepository tagRepository;
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    UniversityRepository universityRepository;
    @Autowired
    ReactionRepository reactionRepository;
    @Autowired
    CatRepository catRepository;

    @Override
    @Transactional
    public BoardResp createBoard(UUID member_id, String img, BoardSaveReq boardSaveReq) {
        Member member = memberRepository.findById(member_id).orElseThrow(() -> new IllegalArgumentException("해당 유저는 없습니다. id=" + member_id));
        University university = universityRepository.findById(boardSaveReq.getUniversityId()).orElseThrow(() -> new IllegalArgumentException("해당 학교는 없습니다."));
        Cat cat = catRepository.findById(boardSaveReq.getCatId()).orElseThrow(() -> new IllegalArgumentException("해당 고양이는 없습니다."));

        Board board = boardRepository.save(Board.builder().lat(boardSaveReq.getLat()).lng(boardSaveReq.getLng())
                .content(boardSaveReq.getContent()).image(img).member(member).university(university).cat(cat).build());


        return BoardResp.builder().boardId(board.getBoardId()).catId(cat.getCatId()).universityId(university.getUniversityId()).memberNickname(member.getNickname())
                .lat(board.getLat()).lng(board.getLng()).content(board.getContent()).build();
    }

    @Override
    @Transactional
    public void createTag(Long board_id, List<TagSaveReq> tagSaveReqs) {
        Board board = boardRepository.findById(board_id).orElseThrow(() -> new IllegalArgumentException("해당 게시물은 없습니다. id=" + board_id));

        List<Tag> tags = new ArrayList<>();

        for (TagSaveReq tagSaveReq : tagSaveReqs) {
            Tag tag = Tag.builder().name(tagSaveReq.getName()).rate(tagSaveReq.getRate()).board(board).build();

            tags.add(tag);
        }

        tagRepository.saveAll(tags);
    }

    @Override
    public Page<BoardLoadResp> searchAllBoard(Long universityId, String tagName, Pageable pageable) {
        Page<BoardLoadResp> page = boardRepository.findBoardByIdAndTag(universityId, tagName, pageable);
        List<BoardLoadResp> list = page.getContent();

        for (BoardLoadResp cur : list) {
            cur.setTags(tagRepository.findByBoardId(cur.getBoardId()));
        }

        return page;
    }

    @Override
    @Transactional
    public void updateReaction(UUID member_id, ReactionDetailReq reactionDetailReq) {
        Member member = memberRepository.findById(member_id).orElseThrow(() -> new IllegalArgumentException("해당 유저는 없습니다. id=" + member_id));
        Board board = boardRepository.findById(reactionDetailReq.getBoardId()).orElseThrow(() -> new IllegalArgumentException("해당 게시물은 없습니다. id=" + reactionDetailReq.getBoardId()));
        String reat = reactionDetailReq.getEmotion();

        switch (reat) {
            case "recommend":
                board.updateRecommend(board.getRecommend() + 1);
                break;
            case "good":
                board.updateGood(board.getGood() + 1);
                break;
            case "impressed":
                board.updateImpressed(board.getImpressed() + 1);
                break;
            case "sad":
                board.updateSad(board.getSad() + 1);
                break;
            case "angry":
                board.updateAngry(board.getAngry() + 1);
                break;
            default:
                throw new IllegalArgumentException("존재하지 않은 이모지 종류입니다.");
        }

        // Reaction 생성
        reactionRepository.save(Reaction.builder().reat(reat).board(board).member(member).build());
    }

    @Override
    @Transactional
    public void deleteReaction(UUID member_id, ReactionDetailReq reactionDetailReq) {
        Board board = boardRepository.findById(reactionDetailReq.getBoardId()).orElseThrow(() -> new IllegalArgumentException("해당 게시물은 없습니다. id=" + reactionDetailReq.getBoardId()));
        String reat = reactionDetailReq.getEmotion();

        switch (reat) {
            case "recommend":
                board.updateRecommend(board.getRecommend() - 1);
                break;
            case "good":
                board.updateGood(board.getGood() - 1);
                break;
            case "impressed":
                board.updateImpressed(board.getImpressed() - 1);
                break;
            case "sad":
                board.updateSad(board.getSad() - 1);
                break;
            case "angry":
                board.updateAngry(board.getAngry() - 1);
                break;
            default:
                throw new IllegalArgumentException("존재하지 않은 이모지 종류입니다.");
        }

        // 해당 이모지 삭제
        reactionRepository.deleteReation(member_id, reactionDetailReq);
    }

}

package com.ssafy.moemoe.api.controller.board;

import com.ssafy.moemoe.api.request.board.BoardSaveReq;
import com.ssafy.moemoe.api.request.board.TagSaveReq;
import com.ssafy.moemoe.api.response.board.BoardDetailResp;
import com.ssafy.moemoe.api.response.board.BoardLoadResp;
import com.ssafy.moemoe.api.response.board.BoardResp;
import com.ssafy.moemoe.api.response.board.TagResp;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.member.MemberDetailResp;
import com.ssafy.moemoe.api.service.S3Uploader;
import com.ssafy.moemoe.api.service.board.BoardService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/boards")
public class BoardController {
    private static final Logger logger = LoggerFactory.getLogger(BoardController.class);

    @Autowired
    BoardService boardService;
    @Autowired
    S3Uploader s3Uploader;

    @Value("${springboot.jwt.secret}")
    private String secretKey = "secretKey";

    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지

    @GetMapping("")
    public ResponseEntity<?> getBoards(@RequestParam Long universityId, String tagName) {
        List<BoardDetailResp> boards = new ArrayList<>();

        List<TagResp> tags = new ArrayList<>();
        tags.add(TagResp.builder()
                .tag_id(1)
                .name("기지개 켜기")
                .rate(85.5)
                .build());
        tags.add(TagResp.builder()
                .tag_id(2)
                .name("식빵 굽기")
                .rate(14.4)
                .build());
        tags.add(TagResp.builder()
                .tag_id(3)
                .name("앉기")
                .rate(0.1)
                .build());

        for (int i = 1; i <= 10; i++) {
            boards.add(BoardDetailResp.builder()
                    .board_id(i)
                    .university_id(1)
                    .content("이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.")
                    .image(tiredCatImage)
                    .lng(127.039516)
                    .lat(37.501258)
                    .created_at(LocalDateTime.now())
                    .angry((int) ((Math.random() * 10000) % 50))
                    .good((int) ((Math.random() * 10000) % 50))
                    .sad((int) ((Math.random() * 10000) % 50))
                    .impressed((int) ((Math.random() * 10000) % 50))
                    .recommend((int) ((Math.random() * 10000) % 50))
                    .member(
                            MemberDetailResp.builder()
                                    .member_id(UUID.randomUUID())
                                    .nickname("노찌노찌")
                                    .reward_id(1)
                                    .build())
                    .cat(
                            CatDetailResp.builder()
                                    .catId((long)1)
                                    .image(tiredCatImage)
                                    .name("피곤냥이")
                                    .build()
                    )
                    .tags(tags)
                    .build());
        }

        return ResponseEntity.ok(boards);
    }

    @PostMapping
    @ApiOperation(value = "게시물 등록", notes = "<strong>image, BoardSaveReq, TagSaveReq</strong>를 통해 게시물을 생성 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<BoardResp> create(
            HttpServletRequest request,
            @RequestPart @ApiParam(value = "프로필 이미지 파일", required = true) MultipartFile image,
            @RequestBody @Valid BoardSaveReq boardSaveReq,
            @RequestBody @Valid List<TagSaveReq> tagSaveReqs) throws IOException {
        //여기 아래부터 클래스로 따로 뺴는게 더 깔끔할 것임.
        String jwtToken = request.getHeader("X-AUTH-TOKEN");
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        UUID member_id = UUID.fromString(claims.get("member_id").toString());

        //이미지 업로드
        String img = s3Uploader.upload(image, "profile");
        logger.info("url >>> " + img);

        // 게시물 등록
        BoardResp boardResp = boardService.createBoard(member_id, img, boardSaveReq);

        // tag 등록
        boardService.createTag(boardResp.getBoardId(), tagSaveReqs);

        return ResponseEntity.status(200).body(boardResp);
    }

    @GetMapping
    @ApiOperation(value = "게시물 전체 and 테그별 공고 조회", notes = "테그명에 따라 조회가 가능하다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Page<BoardLoadResp>> findInterviewByCategoryAndWord(@RequestParam Long universityId, @RequestParam String tagName,
                                                                              @PageableDefault(size = 20) Pageable pageable) {

        return ResponseEntity.status(200).body(boardService.searchAllBoard(universityId, tagName, pageable));
    }
}

package com.ssafy.moemoe.api.controller.board;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.moemoe.api.request.board.BoardSaveReq;
import com.ssafy.moemoe.api.request.board.MultipartFileReq;
import com.ssafy.moemoe.api.request.board.ReactionDetailReq;
import com.ssafy.moemoe.api.response.board.BoardLoadResp;
import com.ssafy.moemoe.api.response.board.BoardResp;
import com.ssafy.moemoe.api.response.disease.JsonDiseaseResp;
import com.ssafy.moemoe.api.service.board.BoardService;
import com.ssafy.moemoe.api.service.disease.DiseaseService;
import com.ssafy.moemoe.common.model.BaseResponseBody;
import com.ssafy.moemoe.common.util.TokenUtils;
import io.jsonwebtoken.Claims;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/boards")
public class BoardController {
    private final BoardService boardService;
    private final TokenUtils tokenUtils;

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
            @ModelAttribute BoardSaveReq boardSaveReq) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        MultipartFile multipartFile = boardSaveReq.getImage();

        // 게시물 등록
        BoardResp boardResp = boardService.createBoard(memberId, multipartFile, boardSaveReq);

        // tag 등록
//        boardService.createTag(boardResp.getBoardId(), boardSaveReq.getTagSaveList());


        //보내고 와서 저장까지



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
    public ResponseEntity<Page<BoardLoadResp>> searchAllBoard(
            HttpServletRequest request,
            @RequestParam Long universityId, @RequestParam(required = false) String tagName,
            @PageableDefault(size = 20) Pageable pageable) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        return ResponseEntity.status(200).body(boardService.searchAllBoard(memberId, universityId, tagName, pageable));
    }

    @PatchMapping("/emotion")
    @ApiOperation(value = "게시물 이모지 등록", notes = "게시물의 이모지 등록이 가능하다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> registerEmotion(HttpServletRequest request,
                                                                      @RequestBody @Valid ReactionDetailReq reactionDetailReq) {

        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        boardService.updateReaction(memberId, reactionDetailReq);

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "게시물 이모지 등록 완료!"));
    }

    @DeleteMapping("/emotion")
    @ApiOperation(value = "게시물 이모지 제거", notes = "게시물의 이모지 등록이 가능하다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> deleteEmotion(HttpServletRequest request, @RequestBody ReactionDetailReq reactionDetailReq) {

        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        boardService.deleteReaction(memberId, reactionDetailReq);

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "게시물 이모지 취소 완료!"));
    }

    //    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지

//    @GetMapping("")
//    public ResponseEntity<?> getBoards(@RequestParam Long universityId, String tagName) {
//        List<BoardDetailResp> boards = new ArrayList<>();
//
//        List<TagResp> tags = new ArrayList<>();
//        tags.add(TagResp.builder()
//                .tag_id(1)
//                .name("기지개 켜기")
//                .rate(85.5)
//                .build());
//        tags.add(TagResp.builder()
//                .tag_id(2)
//                .name("식빵 굽기")
//                .rate(14.4)
//                .build());
//        tags.add(TagResp.builder()
//                .tag_id(3)
//                .name("앉기")
//                .rate(0.1)
//                .build());
//
//        for (int i = 1; i <= 10; i++) {
//            boards.add(BoardDetailResp.builder()
//                    .board_id(i)
//                    .university_id(1)
//                    .content("이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.")
//                    .image(tiredCatImage)
//                    .lng(127.039516)
//                    .lat(37.501258)
//                    .created_at(LocalDateTime.now())
//                    .angry((int) ((Math.random() * 10000) % 50))
//                    .good((int) ((Math.random() * 10000) % 50))
//                    .sad((int) ((Math.random() * 10000) % 50))
//                    .impressed((int) ((Math.random() * 10000) % 50))
//                    .recommend((int) ((Math.random() * 10000) % 50))
//                    .member(
//                            MemberDetailResp.builder()
//                                    .member_id(UUID.randomUUID())
//                                    .nickname("노찌노찌")
//                                    .reward_id(1)
//                                    .build())
//                    .cat(
//                            CatDetailResp.builder()
//                                    .catId((long)1)
//                                    .image(tiredCatImage)
//                                    .name("피곤냥이")
//                                    .build()
//                    )
//                    .tags(tags)
//                    .build());
//        }
//
//        return ResponseEntity.ok(boards);
//    }
}

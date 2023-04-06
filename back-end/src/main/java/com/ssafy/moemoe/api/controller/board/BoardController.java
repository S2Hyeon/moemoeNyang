package com.ssafy.moemoe.api.controller.board;

import com.ssafy.moemoe.api.request.board.BoardSaveReq;
import com.ssafy.moemoe.api.request.board.ReactionDetailReq;
import com.ssafy.moemoe.api.response.board.BoardLoadResp;
import com.ssafy.moemoe.api.response.board.BoardResp;
import com.ssafy.moemoe.api.service.board.BoardService;
import com.ssafy.moemoe.common.model.BaseResponseBody;
import com.ssafy.moemoe.common.util.TokenUtils;
import io.jsonwebtoken.Claims;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
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
            @RequestParam Long universityId, @PageableDefault(size = 100) Pageable pageable) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        return ResponseEntity.status(200).body(boardService.searchAllBoard(memberId, universityId, pageable));
    }

    @PutMapping("/emotion")
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
}

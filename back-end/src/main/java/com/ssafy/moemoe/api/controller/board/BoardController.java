package com.ssafy.moemoe.api.controller.board;

import com.ssafy.moemoe.api.request.board.BoardSaveReq;
import com.ssafy.moemoe.api.request.board.MultipartFileReq;
import com.ssafy.moemoe.api.request.board.ReactionDetailReq;
import com.ssafy.moemoe.api.response.board.BoardLoadResp;
import com.ssafy.moemoe.api.response.board.BoardResp;
//import com.ssafy.moemoe.api.service.S3Uploader;
import com.ssafy.moemoe.api.service.board.BoardService;
import com.ssafy.moemoe.common.model.BaseResponseBody;
import com.ssafy.moemoe.common.util.TokenUtils;
import io.jsonwebtoken.Claims;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
    private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
    private final BoardService boardService;
    private final TokenUtils tokenUtils;

    //    @Autowired
//    S3Uploader s3Uploader;
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
            @RequestBody BoardSaveReq boardSaveReq,
            @ModelAttribute @Valid MultipartFileReq multipartFileReq) throws IOException {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        MultipartFile multipartFile = multipartFileReq.getImage();
        //이미지 업로드
//        String img = s3Uploader.upload(, "profile");
//        logger.info("url >>> " + img);

        String img = "url";

        // 게시물 등록
        BoardResp boardResp = boardService.createBoard(memberId, img, boardSaveReq);

        // tag 등록
        boardService.createTag(boardResp.getBoardId(), boardSaveReq.getTagSaveList());


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
    public ResponseEntity<? extends BaseResponseBody> registerEmotion(HttpServletRequest request, @RequestBody @Valid ReactionDetailReq reactionDetailReq) {

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

    @PostMapping(path = "/disease", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ApiOperation(value = "질병분석 - 피부", notes = "이미지를 전달하여 분석한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> analysisDisease(
            @ModelAttribute @Valid MultipartFileReq multipartFileReq) throws IOException {
        // Read the contents of the MultipartFile into a byte array
        byte[] fileContent = multipartFileReq.getImage().getBytes();

        // Make a POST request to the Flask API endpoint with the file content as a binary file
        String url = "http://127.0.0.1:5000/predict/classification";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        ByteArrayResource contentsAsResource = new ByteArrayResource(fileContent) {
            @Override
            public String getFilename() {
                return multipartFileReq.getImage().getOriginalFilename();
            }
        };
        body.add("file", contentsAsResource);
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

        // Return the response from the Flask API
        return response;
    }
}

package com.ssafy.moemoe.api.controller.board;

<<<<<<< HEAD
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
<<<<<<< HEAD
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
=======
import org.springframework.http.MediaType;
=======
import com.ssafy.moemoe.api.response.board.BoardDetailResp;
import com.ssafy.moemoe.api.response.board.TagResp;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.member.MemberDetailResp;
>>>>>>> 8be3a57cf4072cfd5e443edb3ddbf118c433aa6b
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
>>>>>>> b00643ef4918225adf820d66337f7fc5b2b51075

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/boards")
public class BoardController {

<<<<<<< HEAD
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
=======
    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지

    @GetMapping("")
    public ResponseEntity<?> getBoards(@RequestParam Long universityId, String tagName) {
        List<BoardDetailResp> boards = new ArrayList<>();
>>>>>>> 8be3a57cf4072cfd5e443edb3ddbf118c433aa6b

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
                                    .cat_id(1)
                                    .image(tiredCatImage)
                                    .name("피곤냥이")
                                    .build()
                    )
                    .tags(tags)
                    .build());
        }

<<<<<<< HEAD

        //보내고 와서 저장까지



        return ResponseEntity.status(200).body(boardResp);
=======
        return ResponseEntity.ok(boards);
>>>>>>> b00643ef4918225adf820d66337f7fc5b2b51075
    }
<<<<<<< HEAD

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
=======
>>>>>>> 8be3a57cf4072cfd5e443edb3ddbf118c433aa6b
}

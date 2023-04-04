package com.ssafy.moemoe.api.controller.cat;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.moemoe.api.request.board.MultipartFileReq;
import com.ssafy.moemoe.api.request.cat.CatInfoReq;
import com.ssafy.moemoe.api.request.disease.DiseaseTimelineRegistReq;
import com.ssafy.moemoe.api.response.board.BoardSpotResp;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.response.cat.DiseaseResultResp;
import com.ssafy.moemoe.api.response.cat.DiseaseTimelineResp;
import com.ssafy.moemoe.api.response.disease.JsonDiseaseResp;
import com.ssafy.moemoe.api.service.cat.CatService;
import com.ssafy.moemoe.api.service.disease.DiseaseService;
import com.ssafy.moemoe.common.util.TokenUtils;
import io.jsonwebtoken.Claims;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.*;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cats")
public class CatController {

    private final Logger LOGGER = LoggerFactory.getLogger(CatController.class);
    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지
    private final CatService catService;
    private final DiseaseService diseaseService;
    private final TokenUtils tokenUtils;

    @PostMapping("")
    public ResponseEntity<?> insertCat(HttpServletRequest request, @ModelAttribute CatInfoReq catInfoReq) {
        LOGGER.info("=========================insertCat===================================");
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        boolean result = catService.insertCat(memberId, catInfoReq);
        if(result) {
            return new ResponseEntity<>("고양이가 등록되었습니다.", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("고양이가 등록에 실패했습니다.", HttpStatus.BAD_REQUEST);
        }
    }

    //고양이 리스트 조회
    @GetMapping("")
    public ResponseEntity<?> getCats(HttpServletRequest request, @RequestParam Long universityId) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        List<CatListResp> cats = catService.getCats(memberId, universityId);
        if(cats == null)
            return new ResponseEntity<>("고양이 리스트를 조회에 실패하였습니다.", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(cats, HttpStatus.OK);
    }

    //특정 고양이 상세 조회
    @GetMapping("/{catId}")
    public ResponseEntity<?> getCat(HttpServletRequest request, @PathVariable Long catId) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        CatDetailResp catDetailResp = catService.getCat(memberId, catId);
        if(catDetailResp == null) {
            return new ResponseEntity<>("고양이가 조회에 실패했습니다.", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(catDetailResp, HttpStatus.OK);
    }

    //질병 검사 결과 조회
    @GetMapping("/{catId}/disease")
    public ResponseEntity<?> getDiseaseResult(@PathVariable Long catId) {

        DiseaseResultResp result = DiseaseResultResp.builder()
                .diseaseId(1)
                .name("엄청 아픈 병")
                .explanation("엄청 아프니까 빨리 병원을 데려가세요. 병원에 데려갈 때는 조심히 들고 가주세요. 아프니까요.")
                .image(tiredCatImage)
                .build();

        return ResponseEntity.ok(result);
    }

    //질병 검사 결과 등록
    @PostMapping("/{catId}/disease")
    public ResponseEntity<?> registDiseaseResult(HttpServletRequest request,
                                                 @PathVariable Long catId,
                                                 @RequestBody DiseaseTimelineRegistReq form) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());
        diseaseService.registDiseaseTimeline(memberId, catId, form);

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("msg","검사 결과가 등록되었습니다.");
        return ResponseEntity.ok(resultMap);
    }


    @GetMapping("/{catId}/diseases")
    public ResponseEntity<?> getDiseaseTimelines(@PathVariable Long catId) {

        List<DiseaseTimelineResp> diseases = diseaseService.getDiseaseTimelines(catId);


        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("diseases",diseases);
        return ResponseEntity.ok(resultMap);
    }

    @GetMapping("/{catId}/spot")
    public ResponseEntity<?> getCatSpots(HttpServletRequest request, @PathVariable Long catId) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        List<BoardSpotResp> getCatSpots = catService.getCatSpots(memberId, catId);
        Map<String, List<BoardSpotResp>> map = new HashMap<>();

        if(getCatSpots == null) {
            return new ResponseEntity<>("고양이 최근위치 조회에 실패했습니다.", HttpStatus.NOT_FOUND);
        }

        map.put("boards", getCatSpots);
        return new ResponseEntity<>(map, HttpStatus.OK);
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
        String url = "https://j8a801.p.ssafy.io/disease/predict";
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
        restTemplate.getMessageConverters().add(new StringHttpMessageConverter(StandardCharsets.UTF_8));
        restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());


        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);
        String jsonResponse = response.getBody();
        System.out.printf(jsonResponse);

        // Parse the JSON response and extract the "A3" prediction
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode rootNode = objectMapper.readTree(jsonResponse);
        String predictionA3 = rootNode.get("predictions").get(0).asText();

        // Return a new ResponseEntity object that contains both the DTO object and the original response
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("MyResponseHeader", "MyValue");
        ResponseEntity<?> finalResponse = ResponseEntity.ok()
                .headers(responseHeaders)
                .body(new JsonDiseaseResp(jsonResponse, diseaseService.getDiseaseDetail(predictionA3)));
        return finalResponse;
    }
}

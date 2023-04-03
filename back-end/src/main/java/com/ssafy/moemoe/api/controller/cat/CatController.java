package com.ssafy.moemoe.api.controller.cat;

import com.ssafy.moemoe.api.request.cat.CatInfoReq;
import com.ssafy.moemoe.api.request.disease.DiseaseTimelineRegistReq;
import com.ssafy.moemoe.api.response.board.BoardSpotResp;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.response.cat.DiseaseResultResp;

import com.ssafy.moemoe.api.response.cat.DiseaseTimeline;
import com.ssafy.moemoe.api.response.cat.DiseaseTimelineResp;
import com.ssafy.moemoe.api.service.cat.CatService;
import com.ssafy.moemoe.api.service.disease.DiseaseService;
import com.ssafy.moemoe.common.util.TokenUtils;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<?> getCats(@RequestParam Long universityId) {
        List<CatListResp> cats = new ArrayList<>();
        cats.add(CatListResp.builder()
                        .cat_id(1)
                        .name("볼록이")
                        .gender("M")
                        .age(7)
                        .follower_cnt(10)
                        .image(tiredCatImage)
                        .build());
        cats.add(CatListResp.builder()
                .cat_id(2)
                .name("오목이")
                .gender("F")
                .age(7)
                .follower_cnt(10)
                .image(tiredCatImage)
                .build());
        cats.add(CatListResp.builder()
                .cat_id(3)
                .name("울퉁이")
                .gender("F")
                .age(7)
                .follower_cnt(10)
                .image(tiredCatImage)
                .build());
        cats.add(CatListResp.builder()
                .cat_id(4)
                .name("불퉁이")
                .gender("M")
                .age(7)
                .follower_cnt(10)
                .image(tiredCatImage)
                .build());
        return ResponseEntity.ok(cats);
//        return null;
    }

    //특정 고양이 상세 조회
    @GetMapping("/{catId}")
    public ResponseEntity<?> getCat(@PathVariable Long catId) {
        // catId를 이용해 Cat 객체를 가져오는 코드
        //Cat cat = catService.getCatById(catId);

//        if (cat == null) {
//            // 존재하지 않는 catId에 대한 요청일 경우 404 응답을 보냅니다.
//            return ResponseEntity.notFound().build();
//        }

        CatDetailResp cat = CatDetailResp.builder()
                .cat_id(1)
                .name("볼록이")
                .gender("M")
                .age(7)
                .follower_cnt(10)
                .image(tiredCatImage)
                .lat(37.501258)
                .lng(127.039516)
                .build();
        return ResponseEntity.ok(cat);
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
}

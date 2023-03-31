package com.ssafy.moemoe.api.controller.cat;

import com.ssafy.moemoe.api.request.cat.CatInfoReq;
import com.ssafy.moemoe.api.response.board.BoardSpotResp;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.response.cat.DiseaseResultResp;
import com.ssafy.moemoe.api.response.cat.DiseaseTimeline;
import com.ssafy.moemoe.api.service.cat.CatService;
import com.ssafy.moemoe.common.util.TokenUtils;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cats")
public class CatController {

    private final Logger LOGGER = LoggerFactory.getLogger(CatController.class);
    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지
    private final CatService catService;
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
                .disease_id(1)
                .name("엄청 아픈 병")
                .explanation("엄청 아프니까 빨리 병원을 데려가세요. 병원에 데려갈 때는 조심히 들고 가주세요. 아프니까요.")
                .image(tiredCatImage)
                .build();

        return ResponseEntity.ok(result);
    }

    @GetMapping("/{catId}/diseases")
    public ResponseEntity<?> getDiseaseTimelines(@PathVariable Long catId) {

        DiseaseResultResp disease = DiseaseResultResp.builder()
                .disease_id(1)
                .name("엄청 아픈 병")
                .explanation("엄청 아프니까 빨리 병원을 데려가세요. 병원에 데려갈 때는 조심히 들고 가주세요. 아프니까요.")
                .image(tiredCatImage)
                .build();

        List<DiseaseTimeline> diseaseTimelines = new ArrayList<>();
        for (int i = 1; i <= 6; i++) {
            diseaseTimelines.add(DiseaseTimeline.builder()
                            .disease_timeline_id(i)
                            .created_at(LocalDateTime.now())
                            .image(tiredCatImage)
                            .nickname("노찌노찌")
                            .member_id(1)
                            .disease(disease)
                            .build());
        }

        return ResponseEntity.ok(diseaseTimelines);
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

package com.ssafy.moemoe.api.controller.cat;

import com.ssafy.moemoe.api.response.board.BoardSpotResp;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.response.cat.DiseaseResultResp;
import com.ssafy.moemoe.api.response.cat.DiseaseTimeline;
<<<<<<< HEAD
import com.ssafy.moemoe.api.service.cat.CatService;
import com.ssafy.moemoe.common.util.TokenUtils;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
=======
>>>>>>> b00643ef4918225adf820d66337f7fc5b2b51075
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
<<<<<<< HEAD
import java.util.*;
=======
import java.util.ArrayList;
import java.util.List;
>>>>>>> b00643ef4918225adf820d66337f7fc5b2b51075

@RestController
@RequiredArgsConstructor
@RequestMapping("/cats")
public class CatController {
    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지
<<<<<<< HEAD
    private final CatService catService;
    private final TokenUtils tokenUtils;
=======
>>>>>>> b00643ef4918225adf820d66337f7fc5b2b51075


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

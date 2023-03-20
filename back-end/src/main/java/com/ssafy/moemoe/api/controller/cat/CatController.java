package com.ssafy.moemoe.api.controller.cat;

import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cats")
public class CatController {


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
                        .url("볼록이 이미지")
                        .build());
        cats.add(CatListResp.builder()
                .cat_id(2)
                .name("오목이")
                .gender("F")
                .age(7)
                .follower_cnt(10)
                .url("오목이 이미지")
                .build());
        cats.add(CatListResp.builder()
                .cat_id(3)
                .name("울퉁이")
                .gender("F")
                .age(7)
                .follower_cnt(10)
                .url("울퉁이 이미지")
                .build());
        cats.add(CatListResp.builder()
                .cat_id(4)
                .name("불퉁이")
                .gender("M")
                .age(7)
                .follower_cnt(10)
                .url("불퉁이 이미지")
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
                .url("볼록이 이미지")
                .lat(37.501258)
                .lng(127.039516)
                .build();
        return ResponseEntity.ok(cat);
//        return null;
    }

}

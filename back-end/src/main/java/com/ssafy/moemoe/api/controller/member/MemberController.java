package com.ssafy.moemoe.api.controller.member;

import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.response.member.MemberActivityResp;
import com.ssafy.moemoe.api.response.member.MemberDetailResp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/members")
public class MemberController {


    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지

    @GetMapping("/badge")
    public ResponseEntity<?> getMemberActivity() {

        return ResponseEntity.ok(
                MemberActivityResp.builder()
                        .feed_cnt((int) ((Math.random() * 10000) % 50))
                        .cat_regist_cnt((int) ((Math.random() * 10000) % 50))
                        .disease_regist_cnt((int) ((Math.random() * 10000) % 50))
                        .login_days_cnt((int) ((Math.random() * 10000) % 50))
                        .post_cnt((int) ((Math.random() * 10000) % 50))
                        .react_cnt((int) ((Math.random() * 10000) % 50))
                        .report_cnt((int) ((Math.random() * 10000) % 50))
                        .build()
                );
    }

    @GetMapping("")
    public ResponseEntity<?> getMember() {

        return ResponseEntity.ok(
                MemberDetailResp.builder()
                        .nickname("노찌노찌")
                        .university_name("서울사이버대학교")
                        .build()
        );
    }

    @GetMapping("/follow-list")
    public ResponseEntity<?> getMemberFollows() {

        List<CatListResp> follows = new ArrayList<>();

        for (int i = 1; i < 5; i++) {
            follows.add(CatListResp.builder()
                    .cat_id(i)
                    .name("뚱냥이")
                    .gender("M")
                    .image(tiredCatImage)
                    .age((int) ((Math.random() * 10000) % 10))
                    .follower_cnt((int) ((Math.random() * 10000) % 50))
                    .build());
        }

        return ResponseEntity.ok(follows);
    }



}

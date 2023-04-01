package com.ssafy.moemoe.api.controller.member;

import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.response.member.MemberActivityResp;
import com.ssafy.moemoe.api.response.member.MemberDetailResp;
<<<<<<< HEAD
import com.ssafy.moemoe.api.service.follow.FollowService;
import com.ssafy.moemoe.api.service.member.SignService;
import com.ssafy.moemoe.api.service.university.UniversityService;
import com.ssafy.moemoe.common.util.TokenUtils;
import com.ssafy.moemoe.db.entity.university.University;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
=======
>>>>>>> 8be3a57cf4072cfd5e443edb3ddbf118c433aa6b
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

<<<<<<< HEAD
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
=======
import java.util.ArrayList;
import java.util.List;
>>>>>>> 8be3a57cf4072cfd5e443edb3ddbf118c433aa6b

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {


    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지

<<<<<<< HEAD
    private final UniversityService universityService;
    private final SignService signService;
    private final FollowService followService;
    private final TokenUtils tokenUtils;


=======
>>>>>>> 8be3a57cf4072cfd5e443edb3ddbf118c433aa6b
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
    public ResponseEntity<?> getFollows(HttpServletRequest request) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());
        List<CatListResp> follows = followService.getFollows(memberId);

<<<<<<< HEAD
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("cats", follows);
        return ResponseEntity.ok(resultMap);
=======
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
>>>>>>> 8be3a57cf4072cfd5e443edb3ddbf118c433aa6b
    }



}

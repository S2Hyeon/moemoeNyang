package com.ssafy.moemoe.api.controller.member;

import com.ssafy.moemoe.api.controller.auth.AuthController;
import com.ssafy.moemoe.api.request.member.UpdateMemberReq;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.response.member.MemberActivityResp;
import com.ssafy.moemoe.api.response.member.MemberDetailResp;
import com.ssafy.moemoe.api.service.member.SignService;
import com.ssafy.moemoe.api.service.university.UniversityService;
import com.ssafy.moemoe.common.util.TokenUtils;
import com.ssafy.moemoe.db.entity.university.University;
import io.jsonwebtoken.Claims;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Slf4j
@RestController
@RequestMapping("/members")
public class MemberController {

    private final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지

    private final UniversityService universityService;
    private final SignService signService;

    private final TokenUtils tokenUtils;

    @Autowired
    public MemberController(UniversityService universityService, SignService signService, TokenUtils tokenUtils) {
        this.universityService = universityService;
        this.signService =signService;
        this.tokenUtils = tokenUtils;
    }

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
    public ResponseEntity<?> getMember(HttpServletRequest request) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        String email = claims.get("email").toString();
        String nickname = claims.get("nickname").toString();
        long universityId = Long.parseLong(claims.get("university_id").toString());

        University university = universityService.getUniversity(universityId);
        LOGGER.info("토큰에서 꺼낸 닉네임 : {}, 대학교ID : {}",nickname, universityId);

        return ResponseEntity.ok(
                MemberDetailResp.builder()
                        .nickname(nickname)
                        .university_name(university.getName())
                        .build()
        );
    }

    @PutMapping("")
    public ResponseEntity<?> updateMember(HttpServletRequest request, @RequestBody UpdateMemberReq form) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());
        signService.updateMember(memberId, form);

        Map<String, String> map = new HashMap<>();
        map.put("msg", "회원정보가 수정되었습니다.");
        return ResponseEntity.ok(map);
    }

    @GetMapping("/follow-list")
    public ResponseEntity<?> getMemberFollows() {

        List<CatListResp> follows = new ArrayList<>();

//        for (int i = 1; i < 5; i++) {
//            follows.add(CatListResp.builder()
//                    .cat_id(i)
//                    .name("뚱냥이")
//                    .gender("M")
//                    .image(tiredCatImage)
//                    .age((int) ((Math.random() * 10000) % 10))
//                    .follower_cnt((int) ((Math.random() * 10000) % 50))
//                    .build());
//        }

        return ResponseEntity.ok(follows);
    }

}

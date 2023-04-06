package com.ssafy.moemoe.api.controller.member;

import com.ssafy.moemoe.api.controller.auth.AuthController;
import com.ssafy.moemoe.api.request.member.UpdateMemberReq;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.response.member.MemberActivityResp;
import com.ssafy.moemoe.api.response.member.MemberDetailResp;
import com.ssafy.moemoe.api.service.follow.FollowService;
import com.ssafy.moemoe.api.service.member.SignService;
import com.ssafy.moemoe.api.service.university.UniversityService;
import com.ssafy.moemoe.common.util.TokenUtils;
import com.ssafy.moemoe.config.security.JwtTokenProvider;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.entity.university.University;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
    private final UniversityService universityService;
    private final SignService signService;
    private final FollowService followService;
    private final TokenUtils tokenUtils;
    private final JwtTokenProvider jwtTokenProvider;


    @PutMapping("/badge")
    public ResponseEntity<?> updateBadge(HttpServletRequest request, @RequestParam Long badgeId) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());
        signService.updateBadge(memberId,badgeId);

        Map<String, String> map = new HashMap<>();
        map.put("msg", "뱃지가 변경되었습니다.");
        return ResponseEntity.ok(map);
    }

    @GetMapping("/badge")
    public ResponseEntity<?> getMemberActivity(HttpServletRequest request) {

        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        MemberActivityResp activitiy = signService.getActivity(memberId);

        return ResponseEntity.ok(activitiy);
    }

    @GetMapping("")
    public ResponseEntity<?> getMember(HttpServletRequest request) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());
        String email = claims.get("email").toString();
        String nickname = claims.get("nickname").toString();
        long universityId = Long.parseLong(claims.get("university_id").toString());

        University university = universityService.getUniversity(universityId);
        Member member = signService.getMember(memberId);
        LOGGER.info("토큰에서 꺼낸 닉네임 : {}, 대학교ID : {}",nickname, universityId);

        return ResponseEntity.ok(
                new MemberDetailResp(member)
        );
    }

    @PutMapping("")
    public ResponseEntity<?> updateMember(HttpServletRequest request, @RequestBody UpdateMemberReq form) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());
        String email = claims.get("email").toString();
        signService.updateMember(memberId, form);
        String token = jwtTokenProvider.createToken(email,null);

        Map<String, String> map = new HashMap<>();
        map.put("msg", "회원정보가 수정되었습니다.");
        map.put("token", token);
        return ResponseEntity.ok(map);
    }

    @GetMapping("/follow-list")
    public ResponseEntity<?> getFollows(HttpServletRequest request) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());
        List<CatListResp> follows = followService.getFollows(memberId);

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("cats", follows);
        return ResponseEntity.ok(resultMap);
    }

}

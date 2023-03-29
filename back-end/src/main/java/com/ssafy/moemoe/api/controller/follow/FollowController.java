package com.ssafy.moemoe.api.controller.follow;

import com.ssafy.moemoe.api.request.follow.FollowCatReq;
import com.ssafy.moemoe.api.service.follow.FollowService;
import com.ssafy.moemoe.common.util.TokenUtils;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cats/follow")
public class FollowController {

    private final Logger LOGGER = LoggerFactory.getLogger(FollowController.class);
    private final FollowService followService;
    private final TokenUtils tokenUtils;

    @PostMapping("")
    public ResponseEntity<?> insertFollow(HttpServletRequest request, @RequestBody FollowCatReq followCatReq) {

        Long catId = followCatReq.getCatId();
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());
        LOGGER.info("================insertFollowController===================\n memberId : {}, catId : {}", memberId, catId);

        boolean check = followService.insertFollow(memberId, catId);
        if(check) {
            return new ResponseEntity<>("해당 고양이를 follow 했습니다.", HttpStatus.OK);
        }
        return new ResponseEntity<>("해당 고양이 follow를 실패했습니다.", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{catId}")
    public ResponseEntity<?> deleteFollow(HttpServletRequest request, @PathVariable Long catId) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());

        boolean check = followService.deleteFollow(memberId, catId);

        if(check) {
            return new ResponseEntity<>("해당 고양이를 unfollow 했습니다.", HttpStatus.OK);
        }
        return new ResponseEntity<>("해당 고양이 unfollow를 실패했습니다.", HttpStatus.BAD_REQUEST);
    }
}

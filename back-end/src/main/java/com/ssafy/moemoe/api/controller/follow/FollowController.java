package com.ssafy.moemoe.api.controller.follow;

import com.ssafy.moemoe.api.service.follow.FollowService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cats/follow")
public class FollowController {

    private final FollowService followService;
    @PostMapping("")
    public ResponseEntity<?> insertFollow(HttpServletRequest request, @RequestBody Long catId) {
        // request를 이용한 멤버아이디 가져오기 추가 예정
        boolean check = followService.insertFollow("멤버 UUID", catId);
        if(check) {
            return new ResponseEntity<>("해당 고양이를 follow 했습니다.", HttpStatus.OK);
        }
        return new ResponseEntity<>("해당 고양이 follow를 실패했습니다.", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{catId}")
    public ResponseEntity<?> deleteFollow(HttpServletRequest request, @PathVariable Long catId) {
        // request를 이용한 멤버아이디 가져오기 추가 예정
        boolean check = followService.deleteFollow("멤버 UUID", catId);

        if(check) {
            return new ResponseEntity<>("해당 고양이를 unfollow 했습니다.", HttpStatus.OK);
        }
        return new ResponseEntity<>("해당 고양이 unfollow를 실패했습니다.", HttpStatus.BAD_REQUEST);
    }
}

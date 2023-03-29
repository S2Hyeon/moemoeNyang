package com.ssafy.moemoe.api.controller.board;

import com.ssafy.moemoe.api.response.board.BoardDetailResp;
import com.ssafy.moemoe.api.response.board.TagResp;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.member.MemberDetailResp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/boards")
public class BoardController {

    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지

    @GetMapping("")
    public ResponseEntity<?> getBoards(@RequestParam Long universityId, String tagName) {
        List<BoardDetailResp> boards = new ArrayList<>();

        List<TagResp> tags = new ArrayList<>();
        tags.add(TagResp.builder()
                .tag_id(1)
                .name("기지개 켜기")
                .rate(85.5)
                .build());
        tags.add(TagResp.builder()
                .tag_id(2)
                .name("식빵 굽기")
                .rate(14.4)
                .build());
        tags.add(TagResp.builder()
                .tag_id(3)
                .name("앉기")
                .rate(0.1)
                .build());

        for (int i = 1; i <= 10; i++) {
            boards.add(BoardDetailResp.builder()
                    .board_id(i)
                    .university_id(1)
                    .content("이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.")
                    .image(tiredCatImage)
                    .lng(127.039516)
                    .lat(37.501258)
                    .created_at(LocalDateTime.now())
                    .angry((int) ((Math.random() * 10000) % 50))
                    .good((int) ((Math.random() * 10000) % 50))
                    .sad((int) ((Math.random() * 10000) % 50))
                    .impressed((int) ((Math.random() * 10000) % 50))
                    .recommend((int) ((Math.random() * 10000) % 50))
                    .member(
                            MemberDetailResp.builder()
                                    .member_id(UUID.randomUUID())
                                    .nickname("노찌노찌")
                                    .reward_id(1)
                                    .build())
                    .cat(
                            CatDetailResp.builder()
                                    .cat_id(1)
                                    .image(tiredCatImage)
                                    .name("피곤냥이")
                                    .build()
                    )
                    .tags(tags)
                    .build());
        }

        return ResponseEntity.ok(boards);
    }
}

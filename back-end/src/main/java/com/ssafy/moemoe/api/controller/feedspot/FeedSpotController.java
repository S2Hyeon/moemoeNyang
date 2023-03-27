package com.ssafy.moemoe.api.controller.feedspot;

import com.ssafy.moemoe.api.response.feedspot.FeedSpotMarkerResp;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMessageResp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/feedspots")
public class FeedSpotController {


    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지

    @GetMapping("")
    public ResponseEntity<?> getFeedSpots(@RequestParam Long universityId) {

        List<FeedSpotMarkerResp> feedSpots = new ArrayList<>();
        for (int i = 1; i <= 6; i++) {
            feedSpots.add(FeedSpotMarkerResp.builder()
                    .feedspot_id(i)
                    .name("젤리급식소")
                    .description("여기 고양이는 많이 먹으니까 자주 주셔야돼요")
                    .image(tiredCatImage)
                    .lat(37.501258)
                    .lng(127.039516)
                    .recentFeedTime(LocalDateTime.now().minusMinutes(60*i))
                    .isActive(1)
                    .build());
        }

        return ResponseEntity.ok(feedSpots);
    }

    @GetMapping("/{feedspotId}")
    public ResponseEntity<?> getFeedSpotFeeds(@PathVariable Long feedspotId) {

        List<FeedSpotMessageResp> messages = new ArrayList<>();

        for (int i = 1; i <= 9; i++) {
            messages.add(FeedSpotMessageResp.builder()
                    .member_id(i)
                    .nickname("노찌노찌")
                    .created_at(LocalDateTime.now().minusMinutes(i * 5))
                    .build());
        }

        return ResponseEntity.ok(messages);
    }





}

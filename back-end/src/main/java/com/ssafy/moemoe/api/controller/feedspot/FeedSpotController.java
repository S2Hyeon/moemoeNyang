package com.ssafy.moemoe.api.controller.feedspot;

import com.ssafy.moemoe.api.controller.auth.AuthController;
import com.ssafy.moemoe.api.request.feedspot.RegistFeedSpotReq;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMarkerResp;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMessageResp;
import com.ssafy.moemoe.api.service.feedspot.FeedSpotService;
import com.ssafy.moemoe.common.util.TokenUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/feedspots")
public class FeedSpotController {

    private final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지

    private final FeedSpotService feedSpotService;
    private final TokenUtils tokenUtils;

    public FeedSpotController(FeedSpotService feedSpotService, TokenUtils tokenUtils) {
        this.feedSpotService = feedSpotService;
        this.tokenUtils = tokenUtils;
    }


    @PostMapping("/feedspots")
    public ResponseEntity<?> registFeedSpot(@RequestParam Long universityId,
                                            @RequestBody RegistFeedSpotReq form) {
        feedSpotService.registFeedSpot(universityId, form);

        Map<String, String> map = new HashMap<>();
        map.put("msg", "급식소가 등록되었습니다.");
        return ResponseEntity.ok(map);
    }

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
                    .recentFeedTime(LocalDateTime.now().minusMinutes(60 * i))
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

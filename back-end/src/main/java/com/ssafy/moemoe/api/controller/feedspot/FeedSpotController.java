package com.ssafy.moemoe.api.controller.feedspot;

import com.ssafy.moemoe.api.controller.auth.AuthController;
import com.ssafy.moemoe.api.request.feedspot.RegistFeedSpotReq;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMarkerResp;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMessageResp;
import com.ssafy.moemoe.api.service.feedspot.FeedSpotService;
import com.ssafy.moemoe.common.util.TokenUtils;
import io.jsonwebtoken.Claims;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.*;

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
    public ResponseEntity<?> registFeedSpot(HttpServletRequest request,
                                            @RequestParam Long universityId,
                                            @RequestBody RegistFeedSpotReq form) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());
        feedSpotService.registFeedSpot(memberId,universityId, form);

        Map<String, String> map = new HashMap<>();
        map.put("msg", "급식소가 등록되었습니다.");
        return ResponseEntity.ok(map);
    }

    @GetMapping("")
    public ResponseEntity<?> getFeedSpots(@RequestParam Long universityId) {
        List<FeedSpotMarkerResp> feedSpots = feedSpotService.getFeedSpots(universityId);
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("feedspots", feedSpots);
        return ResponseEntity.ok(resultMap);
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

package com.ssafy.moemoe.api.controller.feedspot;

import com.ssafy.moemoe.api.controller.auth.AuthController;
import com.ssafy.moemoe.api.request.feedspot.RegistFeedSpotReq;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMarkerResp;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMessageResp;
import com.ssafy.moemoe.api.service.feedspot.FeedSpotService;
import com.ssafy.moemoe.common.util.TokenUtils;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/feedspots")
public class FeedSpotController {

    private final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
    final String tiredCatImage = "https://i.ibb.co/9q6ZT22/image.jpg"; //피곤한 냥이 이미지

    private final FeedSpotService feedSpotService;
    private final TokenUtils tokenUtils;



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

        List<FeedSpotMessageResp> feeds = feedSpotService.getFeeds(feedspotId);

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("feeds",feeds);

        return ResponseEntity.ok(resultMap);
    }

    @PostMapping("/{feedspotId}")
    public ResponseEntity<?> createFeed(HttpServletRequest request,
                                        @PathVariable Long feedspotId) {
        Claims claims = tokenUtils.getClaimsFromRequest(request);
        UUID memberId = UUID.fromString(claims.get("member_id").toString());
        feedSpotService.createFeed(memberId, feedspotId);

        Map<String, String> resultMap = new HashMap<>();
        resultMap.put("msg", "먹이 급여가 등록되었습니다.");
        return ResponseEntity.ok(resultMap);
    }


}

package com.ssafy.moemoe.api.service.feedspot;

import com.ssafy.moemoe.api.request.feedspot.RegistFeedSpotReq;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMarkerResp;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMessageResp;

import java.util.List;
import java.util.UUID;

public interface FeedSpotService {

    Long registFeedSpot(UUID memberId, RegistFeedSpotReq form);
    List<FeedSpotMarkerResp> getFeedSpots(Long universityId);
    Long createFeed(UUID memberId, Long feedspotId);
    List<FeedSpotMessageResp> getFeeds(Long feedspotId);
}

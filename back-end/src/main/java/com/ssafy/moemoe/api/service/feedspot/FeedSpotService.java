package com.ssafy.moemoe.api.service.feedspot;

import com.ssafy.moemoe.api.request.feedspot.RegistFeedSpotReq;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMarkerResp;

import java.util.List;
import java.util.UUID;

public interface FeedSpotService {

    Long registFeedSpot(UUID memberId, Long universityId, RegistFeedSpotReq registFeedSpotReq);
    List<FeedSpotMarkerResp> getFeedSpots(Long universityId);
}

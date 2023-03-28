package com.ssafy.moemoe.api.service.feedspot;

import com.ssafy.moemoe.api.request.feedspot.RegistFeedSpotReq;

import java.util.UUID;

public interface FeedSpotService {

    Long registFeedSpot(UUID memberId, Long universityId, RegistFeedSpotReq registFeedSpotReq);
}

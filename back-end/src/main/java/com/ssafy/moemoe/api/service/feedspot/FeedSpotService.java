package com.ssafy.moemoe.api.service.feedspot;

import com.ssafy.moemoe.api.request.feedspot.RegistFeedSpotReq;

public interface FeedSpotService {

    Long registFeedSpot(Long universityId, RegistFeedSpotReq registFeedSpotReq);
}

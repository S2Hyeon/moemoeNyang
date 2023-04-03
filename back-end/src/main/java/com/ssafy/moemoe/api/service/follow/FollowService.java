package com.ssafy.moemoe.api.service.follow;

import com.ssafy.moemoe.api.response.cat.CatListResp;

import java.util.List;
import java.util.UUID;

public interface FollowService {

    boolean insertFollow(UUID memberId, Long catId);

    boolean deleteFollow(UUID memberId, Long catId);

    List<CatListResp> getFollows(UUID memberId);

}

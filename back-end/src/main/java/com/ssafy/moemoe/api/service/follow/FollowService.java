package com.ssafy.moemoe.api.service.follow;

import java.util.UUID;

public interface FollowService {

    boolean insertFollow(UUID memberId, Long catId);

    boolean deleteFollow(UUID memberId, Long catId);

}

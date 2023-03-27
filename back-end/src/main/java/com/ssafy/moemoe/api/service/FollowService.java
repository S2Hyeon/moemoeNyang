package com.ssafy.moemoe.api.service;

import com.ssafy.moemoe.db.entity.Follow;

import java.util.UUID;

public interface FollowService {

    boolean insertFollow(String memberId, Long catId);

    boolean deleteFollow(String memberId, Long catId);

    default Follow toEntity(UUID memberId, Long catId) {
        return Follow.builder()
                .memberId(memberId)
                .catId(catId)
                .build();
    }
}

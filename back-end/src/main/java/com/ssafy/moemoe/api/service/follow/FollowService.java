package com.ssafy.moemoe.api.service.follow;

import com.ssafy.moemoe.db.entity.Follow;

import java.util.UUID;

public interface FollowService {

    boolean insertFollow(String memberId, Long catId);

    boolean deleteFollow(String memberId, Long catId);

    default Follow toEntity(UUID memberId, Long catId) {
        return Follow.builder()
//                .memberId(memberId) 멤버, 고양이 엔티티로 넘길 예정
//                .catId(catId)
                .build();
    }
}

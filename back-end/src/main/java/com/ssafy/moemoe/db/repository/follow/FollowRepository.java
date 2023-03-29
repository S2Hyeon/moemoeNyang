package com.ssafy.moemoe.db.repository.follow;

import com.ssafy.moemoe.db.entity.follow.Follow;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface FollowRepository extends JpaRepository<Follow, Long> {

    Optional<Follow> findByMember_MemberIdAndCat_CatId(UUID memberId, Long catId);
}
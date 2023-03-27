package com.ssafy.moemoe.db.repository.follow;

import com.ssafy.moemoe.db.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Long> {

    Optional<Follow> findByMemberIDAndCatId(String memberId, Long catId);
}

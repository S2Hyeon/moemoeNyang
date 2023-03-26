package com.ssafy.moemoe.db.repository;

import com.ssafy.moemoe.db.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FollowRepository extends JpaRepository<Follow, Long> {
}

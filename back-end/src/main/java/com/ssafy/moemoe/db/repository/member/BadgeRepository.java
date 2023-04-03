package com.ssafy.moemoe.db.repository.member;


import com.ssafy.moemoe.db.entity.member.Badge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BadgeRepository extends JpaRepository<Badge, Long> {
}

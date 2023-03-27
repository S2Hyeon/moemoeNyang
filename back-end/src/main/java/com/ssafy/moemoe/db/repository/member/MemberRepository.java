package com.ssafy.moemoe.db.repository.member;

import com.ssafy.moemoe.db.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

// 예제 13.7
public interface MemberRepository extends JpaRepository<Member, UUID> {

    Member findByMemberId(UUID memberId);
    Member getByEmail(String email);
    Member findByEmail(String email);
    boolean existsByEmail(String email);

}
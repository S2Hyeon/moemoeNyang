package com.ssafy.moemoe.db.repository.member;

import com.ssafy.moemoe.db.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

// 예제 13.7
public interface MemberRepository extends JpaRepository<Member, Long> {

    Member getByEmail(String email);
    boolean existsByEmail(String email);

}
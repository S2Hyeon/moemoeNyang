package com.ssafy.moemoe.db.repository;

import com.ssafy.moemoe.db.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

// 예제 13.7
public interface UserRepository extends JpaRepository<Member, Long> {

    Member getByUid(String uid);

}
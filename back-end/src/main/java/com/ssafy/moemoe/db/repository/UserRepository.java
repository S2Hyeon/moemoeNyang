package com.ssafy.moemoe.db.repository;

import com.ssafy.moemoe.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

// 예제 13.7
public interface UserRepository extends JpaRepository<User, Long> {

    User getByUid(String uid);

}
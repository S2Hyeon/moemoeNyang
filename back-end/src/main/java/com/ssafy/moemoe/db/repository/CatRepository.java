package com.ssafy.moemoe.db.repository;

import com.ssafy.moemoe.db.entity.Cat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CatRepository extends JpaRepository<Cat, Long> {
//    List<Cat> findCatsByUniversityId(Long universityId);
//    Optional<Cat> findCatByCatId(Long catId);

}

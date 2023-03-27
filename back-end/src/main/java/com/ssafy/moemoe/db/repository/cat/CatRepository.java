package com.ssafy.moemoe.db.repository.cat;

import com.ssafy.moemoe.db.entity.Cat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CatRepository extends JpaRepository<Cat, Long> {
//    List<Cat> findCatsByUniversityId(Long universityId);
    Optional<Cat> findCatByCatId(Long catId);

}

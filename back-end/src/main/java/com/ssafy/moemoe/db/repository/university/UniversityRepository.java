package com.ssafy.moemoe.db.repository.university;

import com.ssafy.moemoe.db.entity.university.University;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UniversityRepository extends JpaRepository<University, Long> {


    University findById(long id);

    University getById(long id);
    University findByName(String name);
    List<University> findAll();

    @Query("SELECT u FROM University u WHERE u.name LIKE %:keyword%")
    List<University> findByNameContaining(@Param("keyword") String keyword);
}

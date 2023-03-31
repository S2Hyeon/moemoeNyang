package com.ssafy.moemoe.db.repository.disease;

import com.ssafy.moemoe.db.entity.disease.DiseaseTimeline;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiseaseTimelineRepository extends JpaRepository<DiseaseTimeline, Long> {
    List<DiseaseTimeline> findByCat_CatId(Long catId);
}

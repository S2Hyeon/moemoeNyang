package com.ssafy.moemoe.db.repository.disease;

import com.ssafy.moemoe.db.entity.disease.DiseaseTimeline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseTimelineRepository extends JpaRepository<DiseaseTimeline, Long> {
}

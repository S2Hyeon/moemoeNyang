package com.ssafy.moemoe.db.repository.disease;

import com.ssafy.moemoe.db.entity.disease.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface DiseaseRepository extends JpaRepository<Disease, Long> {
    Disease findByDiseaseId(Long diseaseId);
}

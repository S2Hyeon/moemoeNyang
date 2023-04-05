package com.ssafy.moemoe.db.repository.disease;

import com.ssafy.moemoe.db.entity.disease.DiseaseTimeline;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface DiseaseTimelineRepository extends JpaRepository<DiseaseTimeline, Long> {
    List<DiseaseTimeline> findByCat_CatId(Long catId);

    //사용자 id로 검색해서 작성한 글 갯수 조회
    Long countByMember_MemberId(UUID memberId);
}

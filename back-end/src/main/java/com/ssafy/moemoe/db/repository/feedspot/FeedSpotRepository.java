package com.ssafy.moemoe.db.repository.feedspot;

import com.ssafy.moemoe.db.entity.feedspot.FeedSpot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedSpotRepository extends JpaRepository<FeedSpot, Long> {
    List<FeedSpot> findByUniversityUniversityId(long universityId);
}


package com.ssafy.moemoe.db.repository.feedspot;

import com.ssafy.moemoe.db.entity.feedspot.FeedSpot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedSpotRepository extends JpaRepository<FeedSpot, Long> {
    List<FeedSpot> findByUniversityUniversityId(long universityId);
}


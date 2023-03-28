package com.ssafy.moemoe.db.repository.feedspot;

import com.ssafy.moemoe.db.entity.feedspot.Feed;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedRepository extends JpaRepository<Feed, Long> {

    List<Feed> findByFeedspotFeedspotId(long universityId);
}

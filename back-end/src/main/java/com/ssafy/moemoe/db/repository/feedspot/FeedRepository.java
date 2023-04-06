package com.ssafy.moemoe.db.repository.feedspot;

import com.ssafy.moemoe.db.entity.feedspot.Feed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface FeedRepository extends JpaRepository<Feed, Long> {

    List<Feed> findByFeedspotFeedspotId(long feedspotId);

    @Query("SELECT MAX(f.createdAt) FROM Feed f WHERE f.feedspot.feedspotId = :feedspotId ORDER BY f.createdAt DESC")
    Optional<LocalDateTime> findMostRecentCreatedAtByFeedspotId(@Param("feedspotId") Long feedspotId);

    //사용자 id로 검색해서 작성한 글 갯수 조회
    Long countByMember_MemberId(UUID memberId);
}

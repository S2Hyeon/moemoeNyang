package com.ssafy.moemoe.db.entity.feedspot;

import com.ssafy.moemoe.db.entity.member.Member;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "feed_timeline")
public class Feed {

    @Id
    @Column(name = "feed_timeline_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedTimelineId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feedspot_id")
    private FeedSpot feedspot;

    // 먹이준 시간
    @Column(nullable = false)
    private LocalDateTime createdAt;

}

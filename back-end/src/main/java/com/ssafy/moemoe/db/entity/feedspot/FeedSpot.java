package com.ssafy.moemoe.db.entity.feedspot;

import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.entity.university.University;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "feed_spot")
public class FeedSpot {

    @Id
    @Column(name = "feedspot_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedspotId;

    @ManyToOne
    @JoinColumn(name = "university_id")
    private University university;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private Float lat;

    @Column(nullable = false)
    private Float lng;

    @Column(nullable = false)
    private boolean isActive;

    @Builder
    public FeedSpot(University university, Member member, String name, String description, String image, Float lat, Float lng, boolean isActive) {
        this.university = university;
        this.member = member;
        this.name = name;
        this.description = description;
        this.image = image;
        this.lat = lat;
        this.lng = lng;
        this.isActive = isActive;
    }
}

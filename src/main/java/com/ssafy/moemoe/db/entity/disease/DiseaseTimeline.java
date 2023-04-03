package com.ssafy.moemoe.db.entity.disease;

import com.ssafy.moemoe.api.request.disease.DiseaseTimelineRegistReq;
import com.ssafy.moemoe.db.entity.cat.Cat;
import com.ssafy.moemoe.db.entity.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DiseaseTimeline {

    @Id
    @Column(name = "disease_timeline_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long diseaseTimelineId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cat_id")
    private Cat cat;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "disease_id")
    private Disease disease;

    private String image;

    private LocalDateTime createdAt;

    @Builder
    public DiseaseTimeline(Member member, Cat cat, Disease disease, String image) {
        this.member = member;
        this.cat = cat;
        this.disease = disease;
        this.image = image;
        this.createdAt = LocalDateTime.now();
    }

}

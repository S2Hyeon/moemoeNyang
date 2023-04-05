package com.ssafy.moemoe.db.entity.board;

import com.ssafy.moemoe.db.entity.cat.Cat;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.entity.university.University;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(value = {AuditingEntityListener.class}) // JPA 내부에서 엔티티 객체가 생성/변경되는 것을 감지하는 역할
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    private Float lat;

    private Float lng;

    private String content;

    private String image;

    @Builder.Default()
    private Long recommend = (long)0;

    @Builder.Default()
    private Long good = (long)0;

    @Builder.Default()
    private Long impressed = (long)0;

    @Builder.Default()
    private Long sad = (long)0;

    @Builder.Default()
    private Long angry = (long)0;

    @CreatedDate // JPA에서 엔티티의 생성 시간을 처리
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    // OneToMany 관계 설정
    @OneToMany(mappedBy = "board")
    private List<Reaction> reactionList;

    // ManyToOne 관계 설정
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "university_id")
    private University university;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cat_id")
    private Cat cat;

    @Builder
    private Board(float lat, float lng, String content, String image, Member member, University university, Cat cat) {
        this.lat = lat;
        this.lng = lng;
        this.content = content;
        this.image = image;
        this.member = member;
        this.university = university;
        this.cat = cat;
    }

    public void updateRecommend(Long recommend) {
        this.recommend = recommend;
    }
    public void updateGood(Long good) {
        this.good = good;
    }
    public void updateImpressed(Long impressed) {
        this.impressed = impressed;
    }
    public void updateSad(Long sad) {
        this.sad = sad;
    }
    public void updateAngry(Long angry) {
        this.angry = angry;
    }

}

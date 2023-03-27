package com.ssafy.moemoe.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.UUID;

@Entity
@NoArgsConstructor
@DynamicInsert
@Getter
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long followId;

    @Column(name = "member_id")
    private UUID memberId;

    @ManyToOne
    @JoinColumn(name = "member_id", insertable = false, updatable = false)
    private Member member;

    @Column(name = "cat_id")
    private Long catId;

    @ManyToOne
    @JoinColumn(name = "cat_id", insertable = false, updatable = false)
    private Cat cat;

    @Builder
    public Follow(UUID memberId, Long catId) {
        this.memberId = memberId;
        this.catId = catId;
    }
}

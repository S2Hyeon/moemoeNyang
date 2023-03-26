package com.ssafy.moemoe.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@DynamicInsert
@Getter
public class Cat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long catId;

    @Column(name = "university_id")
    private Long universityId;

    @OneToOne
    @JoinColumn(name = "university_id", insertable = false, updatable = false)
    private University university;

    private String name;

    private Integer age;
    private Character gender;
    private Long followerCnt;
    private String image;
    @Column(name="is_active", columnDefinition = "TINYINT", length=1)
    private Integer isActive;

    @Builder
    public Cat(Long universityId, String name, Integer age, Character gender, String image) {
        this.universityId = universityId;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.image = image;
    }
}

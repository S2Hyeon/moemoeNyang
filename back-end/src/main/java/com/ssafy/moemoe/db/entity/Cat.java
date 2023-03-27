package com.ssafy.moemoe.db.entity;

import com.ssafy.moemoe.db.entity.university.University;
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

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "university_id")
    private University university;

    private String name;

    private Integer age;
    private Character gender;
    private Long followerCnt;
    private String image;
    @Column(name="is_active", columnDefinition = "TINYINT", length=1)
    private Integer isActive;

    @Builder
    public Cat(University university, String name, Integer age, Character gender, String image) {
        this.university = university;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.image = image;
    }
}

package com.ssafy.moemoe.db.entity.university;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class University {

    @Id
    @Column(name = "university_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name; //대학교명
    private String address; //대학교 주소

    private double lat; //위도
    private double lng; //경도
}

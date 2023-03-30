package com.ssafy.moemoe.db.entity.disease;


import lombok.Builder;

import javax.persistence.*;


@Entity
//@Builder
@Table(name = "disease_list")
public class Disease {
    @Id
    @Column(name = "disease_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long diseaseId;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String explanation;

}

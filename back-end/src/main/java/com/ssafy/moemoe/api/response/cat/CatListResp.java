package com.ssafy.moemoe.api.response.cat;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.querydsl.core.annotations.QueryProjection;
import com.ssafy.moemoe.db.entity.cat.Cat;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CatListResp {

    private Long catId;
    private String name;
    private Integer age;
    private Character gender;
    private Long followerCnt;
    private String image;

    private Long isFollowing;

    @Builder
    public CatListResp(Long catId, String name, Integer age, Character gender, Long followerCnt, String image, Long isFollowing) {
        this.catId = catId;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.followerCnt = followerCnt;
        this.image = image;
        this.isFollowing = isFollowing;
    }


    @QueryProjection
    public CatListResp(Cat cat, Long isFollowing) {
        this.catId = cat.getCatId();
        this.name = cat.getName();
        this.age = cat.getAge();
        this.gender = cat.getGender();
        this.followerCnt = cat.getFollowerCnt();
        this.image = cat.getImage();
        this.isFollowing = isFollowing;
    }
}

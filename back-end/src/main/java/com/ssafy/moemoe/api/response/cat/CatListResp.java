package com.ssafy.moemoe.api.response.cat;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
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

    @QueryProjection
    public CatListResp(Long catId, String name, Integer age, Character gender, Long followerCnt, String image, Long isFollowing) {
        this.catId = catId;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.followerCnt = followerCnt;
        this.image = image;
        this.isFollowing = isFollowing;
    }
}

package com.ssafy.moemoe.api.response.cat;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.ssafy.moemoe.db.entity.cat.Cat;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CatDetailResp {

    private Long catId;
    private String name;
    private Integer age;
    private Character gender;
    private Long followerCnt;
    private String image;
    private Float lat;
    private Float lng;


    @Builder
    public CatDetailResp(Long catId, String name, Integer age, Character gender, Long followerCnt, String image, Float lat, Float lng) {
        this.catId = catId;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.followerCnt = followerCnt;
        this.image = image;
        this.lat = lat;
        this.lng = lng;
    }

    public CatDetailResp(Cat cat) {
        this.catId = cat.getCatId();
        this.name = cat.getName();
        this.age = cat.getAge();
        this.gender = cat.getGender();
        this.followerCnt = cat.getFollowerCnt();
        this.image = cat.getImage();
    }

}

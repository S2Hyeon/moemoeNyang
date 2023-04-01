package com.ssafy.moemoe.api.response.cat;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
<<<<<<< HEAD
import com.querydsl.core.annotations.QueryProjection;
import com.ssafy.moemoe.db.entity.cat.Cat;
import lombok.Builder;
import lombok.Data;
=======
import lombok.Builder;
import lombok.Getter;
>>>>>>> 8be3a57cf4072cfd5e443edb3ddbf118c433aa6b
import lombok.NoArgsConstructor;
import lombok.ToString;

<<<<<<< HEAD
@Data
@Builder
=======
@Getter
@ToString
>>>>>>> 8be3a57cf4072cfd5e443edb3ddbf118c433aa6b
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CatListResp {

    private long cat_id;
    private String name;
    private int age;
    private String gender;
    private int follower_cnt;
    private String image;

<<<<<<< HEAD
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
=======
    @Builder
    public CatListResp(long cat_id, String name, int age, String gender, int follower_cnt, String image) {
        this.cat_id = cat_id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.follower_cnt = follower_cnt;
        this.image = image;
>>>>>>> 8be3a57cf4072cfd5e443edb3ddbf118c433aa6b
    }
}

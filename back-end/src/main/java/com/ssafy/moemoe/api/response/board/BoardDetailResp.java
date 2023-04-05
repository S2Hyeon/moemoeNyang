package com.ssafy.moemoe.api.response.board;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.member.MemberDetailResp;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class BoardDetailResp {

    private Long board_id;
    private Long university_id;
    private CatDetailResp cat;
    private MemberDetailResp member;
    private Float lat;
    private Float lng;
    private String content;
    private String image;
    private LocalDateTime created_at;
    private Long recommend;
    private Long good;
    private Long impressed;
    private Long sad;
    private Long angry;

    @Builder
    public BoardDetailResp(Long board_id, Long university_id, CatDetailResp cat, MemberDetailResp member,
                           Float lat, Float lng, String content, String image, LocalDateTime created_at,
                           Long recommend, Long good, Long impressed, Long sad, Long angry){
        this.board_id = board_id;
        this.university_id = university_id;
        this.cat = cat;
        this.member = member;
        this.lat = lat;
        this.lng = lng;
        this.content = content;
        this.image = image;
        this.created_at = created_at;
        this.recommend = recommend;
        this.good = good;
        this.impressed = impressed;
        this.sad = sad;
        this.angry = angry;
    }
}

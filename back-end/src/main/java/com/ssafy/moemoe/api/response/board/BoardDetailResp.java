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

    private long board_id;
    private long university_id;
    private CatDetailResp cat;
    private MemberDetailResp member;
    private List<TagResp> tags;
    private double lat;
    private double lng;
    private String content;
    private String image;
    private LocalDateTime created_at;
    private long recommend;
    private long good;
    private long impressed;
    private long sad;
    private long angry;

    @Builder
    public BoardDetailResp(long board_id, long university_id, CatDetailResp cat, MemberDetailResp member, List<TagResp> tags,
                            double lat, double lng, String content, String image, LocalDateTime created_at,
                            long recommend, long good, long impressed, long sad, long angry){
        this.board_id = board_id;
        this.university_id = university_id;
        this.cat = cat;
        this.member = member;
        this.tags = tags;
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

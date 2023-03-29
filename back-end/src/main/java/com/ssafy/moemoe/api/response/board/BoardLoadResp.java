package com.ssafy.moemoe.api.response.board;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.querydsl.core.annotations.QueryProjection;
import com.ssafy.moemoe.db.entity.cat.Cat;
import com.ssafy.moemoe.db.entity.board.Board;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.entity.university.University;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Board 전체 정보 조회 API ([GET] /) 요청에 대한 응답값 정의.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel("BoardLoadRes")
public class BoardLoadResp {
    @ApiModelProperty(name = "Board ID")
    private Long boardId;

    @ApiModelProperty(name = "Cat ID")
    private Long catId;

    @ApiModelProperty(name = "Cat image")
    private String catImage;

    @ApiModelProperty(name = "Cat Name")
    private String catName;

    @ApiModelProperty(name = "Member Nickname")
    private String memberNickname;

    @ApiModelProperty(name = "Board Image")
    private String boardImage;

    @ApiModelProperty(name = "Tags")
    private List<TagLoadResp> tags;

    @ApiModelProperty(name = "lat")
    private Float lat;

    @ApiModelProperty(name = "lng")
    private Float lng;

    @ApiModelProperty(name = "recommend")
    private Long recommend;

    @ApiModelProperty(name = "good")
    private Long good;

    @ApiModelProperty(name = "impressed")
    private Long impressed;

    @ApiModelProperty(name = "sad")
    private Long sad;

    @ApiModelProperty(name = "angry")
    private Long angry;

    @ApiModelProperty(name = "createdAt")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
    private LocalDateTime createdAt;

    @QueryProjection
    public BoardLoadResp(Board board, Cat cat, Member member, University university) {
        this.boardId = board.getBoardId();
        this.catId = cat.getCatId();
        this.catImage = cat.getImage();
        this.catName = cat.getName();
        this.memberNickname = member.getNickname();
        this.boardImage = board.getImage();
        this.lat = board.getLat();
        this.lng = board.getLng();
        this.recommend = board.getRecommend();
        this.good = board.getGood();
        this.impressed = board.getImpressed();
        this.sad = board.getSad();
        this.angry = board.getAngry();
        this.createdAt = board.getCreatedAt();
    }
}

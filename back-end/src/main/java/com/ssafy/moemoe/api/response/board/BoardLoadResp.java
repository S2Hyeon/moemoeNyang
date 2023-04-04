package com.ssafy.moemoe.api.response.board;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.querydsl.core.annotations.QueryProjection;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.member.MemberDetailResp;
import com.ssafy.moemoe.db.entity.board.Board;
import com.ssafy.moemoe.db.entity.cat.Cat;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.entity.university.University;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Board 전체 정보 조회 API ([GET] /) 요청에 대한 응답값 정의.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel("BoardLoadRes")
@Builder
public class BoardLoadResp {
    @ApiModelProperty(name = "Board ID")
    private Long boardId;
    @ApiModelProperty(name = "University ID")
    private Long universityId;

    @ApiModelProperty(name = "Cat")
    private CatDetailResp cat;
    @ApiModelProperty(name = "Member")
    private MemberDetailResp member;

    @ApiModelProperty(name = "Tags")
    private List<TagLoadResp> tags;

    @ApiModelProperty(name = "lat")
    private Float lat;

    @ApiModelProperty(name = "lng")
    private Float lng;
    @ApiModelProperty(name = "content")
    private String content;

    @ApiModelProperty(name = "Image")
    private String image;

    @ApiModelProperty(name = "createdAt")
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime createdAt;
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

    //내가 해당 게시글에 감정표시를 했는지 담겨있는 필드
    @ApiModelProperty(name = "myEmotion")
    private String myEmotion;

    public BoardLoadResp(Board board) {
        this.boardId = board.getBoardId();
        this.cat = new CatDetailResp(board.getCat());
        this.member = new MemberDetailResp(board.getMember());
//        this.tags = tags; //일단 태그는 아무것도 없다고 생각하겠음.
        this.lat = board.getLat();
        this.lng = board.getLng();
        this.content = board.getContent();
        this.image = board.getImage();
        this.createdAt = board.getCreatedAt();
        this.recommend = board.getRecommend();
        this.good = board.getGood();
        this.impressed = board.getImpressed();
        this.sad = board.getSad();
        this.angry = board.getAngry();
    }

    @QueryProjection
    public BoardLoadResp(Board board, Cat cat, Member member, University university) {
        this.boardId = board.getBoardId();
        this.universityId = university.getUniversityId();
        this.cat = new CatDetailResp(cat);
        this.member = new MemberDetailResp(member);
        //this.tags = tags; //일단 태그는 아무것도 없다고 생각하겠음.
        this.lat = board.getLat();
        this.lng = board.getLng();
        this.content = board.getContent();
        this.image = board.getImage();
        this.createdAt = board.getCreatedAt();
        this.recommend = board.getRecommend();
        this.good = board.getGood();
        this.impressed = board.getImpressed();
        this.sad = board.getSad();
        this.angry = board.getAngry();
    }

//    @QueryProjection//빌더랑 비슷한데 쿼리 디에셀에서 아예 한번에 주입해주는 것임
//    public BoardLoadResp(Board board, Cat cat, Member member, University university) {
//        this.boardId = board.getBoardId();
//        this.lat = board.getLat();
//        this.lng = board.getLng();
//        this.recommend = board.getRecommend();
//        this.good = board.getGood();
//        this.impressed = board.getImpressed();
//        this.sad = board.getSad();
//        this.angry = board.getAngry();
//        this.content = board.getContent();
//        this.createdAt = board.getCreatedAt();
//    }

}

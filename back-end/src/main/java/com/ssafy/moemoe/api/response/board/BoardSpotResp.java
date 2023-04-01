package com.ssafy.moemoe.api.response.board;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.ssafy.moemoe.db.entity.board.Board;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;


@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class BoardSpotResp {

    private Long boardId;
    private String image;
    private Float lat;
    private Float lng;
    private LocalDateTime createdAt;


    @Builder
    public BoardSpotResp(Board board) {
        this.boardId = board.getBoardId();
        this.image = board.getImage();
        this.lat = board.getLat();
        this.lng = board.getLng();
        this.createdAt = board.getCreatedAt();
    }
}

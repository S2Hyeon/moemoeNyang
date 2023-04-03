package com.ssafy.moemoe.api.response.board;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class CatDetailBoardResp {
    private long board_id;
    private String image;

    @Builder
    public CatDetailBoardResp(long board_id, String image){
        this.board_id = board_id;
        this.image = image;
    }
}

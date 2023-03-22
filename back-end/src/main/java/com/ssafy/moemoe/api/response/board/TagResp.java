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
public class TagResp {
    long tag_id;
    long board_id;
    String name;
    double rate;

    @Builder
    public TagResp(long tag_id, long board_id, String name, double rate) {
        this.tag_id = tag_id;
        this.board_id = board_id;
        this.name = name;
        this.rate = rate;
    }
}

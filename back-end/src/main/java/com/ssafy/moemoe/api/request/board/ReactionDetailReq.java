package com.ssafy.moemoe.api.request.board;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.constraints.NotBlank;

/**
 * Emotion 생성 API ([Patch] /boards/emotion) 요청에 필요한 리퀘스트 바디 정의.
 */
@ApiModel("EmotionSaveReq")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class ReactionDetailReq {
    @ApiModelProperty(example = "", name = "boardId")
    private Long boardId;

    @ApiModelProperty(example = "", name = "emotion")
    private String emotion;
}
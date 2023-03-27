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
    @NotBlank(message = "boardId를 확인해주세요.")
    private Long boardId;

    @ApiModelProperty(example = "", name = "emotion")
    @NotBlank(message = "emotion을 확인해주세요.")
    private String emotion;
}
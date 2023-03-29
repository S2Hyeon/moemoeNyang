package com.ssafy.moemoe.api.request.board;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.constraints.NotBlank;

/**
 * Tag 생성 API ([POST] /boards) 요청에 필요한 리퀘스트 바디 정의.
 */
@ApiModel("TagSaveReq")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class TagSaveReq {
    @ApiModelProperty(example = "", name = "tag_name")
    @NotBlank(message = "name을 확인해주세요.")
    private String name;

    @ApiModelProperty(example = "", name = "tag_rate")
    @NotBlank(message = "rate을 확인해주세요.")
    private Float rate;
}
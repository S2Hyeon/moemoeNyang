package com.ssafy.moemoe.api.request.board;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * Board 생성 API ([POST] /boards) 요청에 필요한 리퀘스트 바디 정의.
 */
@ApiModel("BoardSaveReq")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class BoardSaveReq {
    @ApiModelProperty(example = "", name = "Cat_Id")
    @NotBlank(message = "catId를 확인해주세요.")
    private Long catId;

    @ApiModelProperty(example = "", name = "University_Id")
    @NotBlank(message = "universityId를 확인해주세요.")
    private Long universityId;

    @ApiModelProperty(example = "", name = "경도")
    @NotBlank(message = "lat을 확인해주세요.")
    private Float lat;

    @ApiModelProperty(example = "", name = "위도")
    @NotBlank(message = "lng를 확인해주세요.")
    private Float lng;

    @ApiModelProperty(example = "", name = "내용")
    @NotNull(message = "content를 확인해주세요.")
    private String content;
    @ApiModelProperty(example = "", name = "태그 저장 리스트")
    private List<TagSaveReq> tagSaveList;
}
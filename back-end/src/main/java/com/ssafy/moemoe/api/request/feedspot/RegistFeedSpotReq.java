package com.ssafy.moemoe.api.request.feedspot;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.constraints.NotBlank;

@ApiModel("RegistFeedSpotReq")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class RegistFeedSpotReq {

    @ApiModelProperty(example = "", name = "급식소 이름")
    @NotBlank(message = "급식소 이름을 확인해주세요.")
    private String name;

    @ApiModelProperty(example = "", name = "설명")
    @NotBlank(message = "급식소 설명을 확인해주세요.")
    private String description;

    @ApiModelProperty(example = "", name = "이미지")
    @NotBlank(message = "이미지를 확인해주세요.")
    private String image;

    @ApiModelProperty(example = "", name = "경도")
    @NotBlank(message = "경도(lat)를 확인해주세요.")
    private Float lat;

    @ApiModelProperty(example = "", name = "위도")
    @NotBlank(message = "위도(lng)를 확인해주세요.")
    private Float lng;


}

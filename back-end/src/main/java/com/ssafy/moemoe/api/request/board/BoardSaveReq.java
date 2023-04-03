package com.ssafy.moemoe.api.request.board;

import com.ssafy.moemoe.db.entity.cat.Cat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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

    @ApiModelProperty(example = "", name = "사진/영상")
    @NotNull(message = "사진/영상을 확인해주세요.")
    private MultipartFile image;

    public BoardSaveReq(Cat cat, Float lat, Float lng) {
        this.catId = cat.getCatId();
        this.universityId = cat.getUniversity().getUniversityId();
        this.lat = lat;
        this.lng = lng;
        this.content = "초기 문구";
    }
}
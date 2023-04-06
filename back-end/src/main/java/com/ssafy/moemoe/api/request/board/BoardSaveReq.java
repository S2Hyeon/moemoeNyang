package com.ssafy.moemoe.api.request.board;

import com.ssafy.moemoe.db.entity.cat.Cat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

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
    private Long catId;

    @ApiModelProperty(example = "", name = "University_Id")
    private Long universityId;

    @ApiModelProperty(example = "", name = "경도")
    private Float lat;

    @ApiModelProperty(example = "", name = "위도")
    private Float lng;

    @ApiModelProperty(example = "", name = "내용")
    private String content;

    @ApiModelProperty(example = "", name = "사진/영상")
    private MultipartFile image;

    public BoardSaveReq(Cat cat, Float lat, Float lng) {
        this.catId = cat.getCatId();
        this.universityId = cat.getUniversity().getUniversityId();
        this.lat = lat;
        this.lng = lng;
        this.content = cat.getName() + "이(가) 등록되었습니다!!";
    }
}
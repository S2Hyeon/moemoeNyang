package com.ssafy.moemoe.api.request.board;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

/**
 * 이미지 파일 생성 API ([POST] /boards/disease) 요청에 필요한 리퀘스트 바디 정의.
 */
@ApiModel("MultipartFileReq")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Schema(title = "파일 Vo")
public class MultipartFileReq {
    @Schema(title = "멀티파트 이미지 File", description = "멀티 파트 이미지 File")
    private MultipartFile image;
}
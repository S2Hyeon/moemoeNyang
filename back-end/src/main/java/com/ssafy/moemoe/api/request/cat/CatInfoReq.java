package com.ssafy.moemoe.api.request.cat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CatInfoReq {

    private Long universityId;

    private String name;
    private Integer age;
    private Character gender;
    private String image;
}

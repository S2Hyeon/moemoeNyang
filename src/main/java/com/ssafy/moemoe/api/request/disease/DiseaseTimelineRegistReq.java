package com.ssafy.moemoe.api.request.disease;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DiseaseTimelineRegistReq {

    private Long diseaseId;
    private String image;
}

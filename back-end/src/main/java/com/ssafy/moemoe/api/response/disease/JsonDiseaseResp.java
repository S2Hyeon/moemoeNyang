package com.ssafy.moemoe.api.response.disease;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class JsonDiseaseResp {

    private String jsonResponse;
    private DiseaseDetailResp diseaseDetailResp;

    @Builder
    public JsonDiseaseResp(String jsonResponse, DiseaseDetailResp diseaseDetailResp){
        this.jsonResponse = jsonResponse;
        this.diseaseDetailResp = diseaseDetailResp;
    }
}

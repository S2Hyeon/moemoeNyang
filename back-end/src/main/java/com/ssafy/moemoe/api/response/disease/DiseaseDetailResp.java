package com.ssafy.moemoe.api.response.disease;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.ssafy.moemoe.db.entity.disease.Disease;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class DiseaseDetailResp {

    private Long diseaseId;
    private String name;
    private String explanation;

    @Builder
    public DiseaseDetailResp(Disease disease){
        this.diseaseId = disease.getDiseaseId();
        this.name = disease.getName();
        this.explanation = disease.getExplanation();
    }
}

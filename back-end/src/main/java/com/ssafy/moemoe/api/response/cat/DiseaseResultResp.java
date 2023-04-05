package com.ssafy.moemoe.api.response.cat;

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
public class DiseaseResultResp {
    private long diseaseId;
    private String name;
    private String explanation;
    private String image;

    @Builder
    public DiseaseResultResp(long diseaseId, String name, String explanation, String image) {
        this.diseaseId = diseaseId;
        this.name = name;
        this.explanation = explanation;
        this.image = image;
    }

    @Builder
    public DiseaseResultResp(Disease disease) {
        this.diseaseId = disease.getDiseaseId();
        this.name = disease.getName();
        this.explanation = disease.getExplanation();
    }
}

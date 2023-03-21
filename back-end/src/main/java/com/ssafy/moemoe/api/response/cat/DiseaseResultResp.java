package com.ssafy.moemoe.api.response.cat;

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
public class DiseaseResultResp {
    private long disease_id;
    private String name;
    private String explanation;
    private String image;

    @Builder
    public DiseaseResultResp(long disease_id, String name, String explanation, String image) {
        this.disease_id = disease_id;
        this.name = name;
        this.explanation = explanation;
        this.image = image;
    }
}

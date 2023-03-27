package com.ssafy.moemoe.api.response.university;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.ssafy.moemoe.api.controller.university.UniversityController;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class UniversityResultResp {
    private long university_id;
    private String name;
    private String address;

    @Builder
    public UniversityResultResp(long university_id, String name, String address) {
        this.university_id = university_id;
        this.name = name;
        this.address = address;
    }
}

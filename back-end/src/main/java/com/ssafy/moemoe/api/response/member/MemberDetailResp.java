package com.ssafy.moemoe.api.response.member;

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
public class MemberDetailResp {

    private String nickname;
    private String university_name;

    @Builder
    public MemberDetailResp(String nickname, String university_name) {
        this.nickname = nickname;
        this.university_name = university_name;
    }

}

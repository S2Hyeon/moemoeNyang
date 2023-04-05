package com.ssafy.moemoe.api.request.member;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@NoArgsConstructor
public class SignUpReq {

    private String email;
    private String password;
    private String nickname;
    private long universityId;

    @Builder
    public SignUpReq(String email, String password, String nickname, long universityId){
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.universityId = universityId;
    }

}

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
public class SignInReq {

    private String email;
    private String password;

    @Builder
    public SignInReq(String email, String password){
        this.email = email;
        this.password = password;
    }
}

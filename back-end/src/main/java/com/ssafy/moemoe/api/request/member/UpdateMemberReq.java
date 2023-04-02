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
public class UpdateMemberReq {

    private String password;
    private String nickname;
    private long universityId;
    private long badgeId;

    @Builder
    public UpdateMemberReq(String password, String nickname, long universityId, long badgeId){
        this.password = password;
        this.nickname = nickname;
        this.universityId = universityId;
        this.badgeId = badgeId;
    }
}

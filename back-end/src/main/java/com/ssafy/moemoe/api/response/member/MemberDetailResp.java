package com.ssafy.moemoe.api.response.member;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.ssafy.moemoe.db.entity.member.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.UUID;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class MemberDetailResp {

    UUID memberId;
    long universityId;
    private String universityName;
    long badgeId;
    String email;
    private String nickname;
    @Builder
    public MemberDetailResp(String nickname, String universityName, long universityId, long badgeId, String email, UUID memberId) {
        this.memberId = memberId;
        this.universityId = universityId;
        this.badgeId = badgeId;
        this.email = email;
        this.nickname = nickname;
        this.universityName = universityName;
    }

    public MemberDetailResp(Member member) {
        this.memberId = member.getMemberId();
        this.universityId = member.getUniversity().getUniversityId();
        this.badgeId = member.getBadge().getBadgeId();
        this.email = member.getEmail();
        this.nickname = member.getNickname();
        this.universityName = member.getUniversity().getName();
    }

}

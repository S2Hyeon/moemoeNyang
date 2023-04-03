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

    UUID member_id;
    long university_id;
    private String university_name;
    long reward_id;
    String email;
    private String nickname;
    @Builder
    public MemberDetailResp(String nickname, String university_name, long university_id, long reward_id, String email, UUID member_id) {
        this.member_id = member_id;
        this.university_id = university_id;
        this.reward_id = reward_id;
        this.email = email;
        this.nickname = nickname;
        this.university_name = university_name;
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

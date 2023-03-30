package com.ssafy.moemoe.api.response.feedspot;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class FeedSpotMessageResp {
    private UUID member_id;
    private String nickname;
    private LocalDateTime created_at;

    @Builder
    public FeedSpotMessageResp(UUID member_id, String nickname, LocalDateTime created_at) {
        this.member_id = member_id;
        this.nickname = nickname;
        this.created_at = created_at;
    }
}

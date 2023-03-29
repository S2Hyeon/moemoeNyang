package com.ssafy.moemoe.api.response.cat;

import lombok.Builder;

import java.time.LocalDateTime;

public class DiseaseTimeline {
    private long disease_timeline_id;
    private long member_id;
    private String nickname;
    private String image;
    private LocalDateTime created_at;
    private DiseaseResultResp disease;

    @Builder
    public DiseaseTimeline(long disease_timeline_id, long member_id, String nickname, String image, LocalDateTime created_at, DiseaseResultResp disease) {
        this.disease_timeline_id = disease_timeline_id;
        this.member_id = member_id;
        this.nickname = nickname;
        this.image = image;
        this.created_at = created_at;
        this.disease = disease;
    }
}

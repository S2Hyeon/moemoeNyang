package com.ssafy.moemoe.api.response.cat;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.ssafy.moemoe.db.entity.disease.DiseaseTimeline;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
public class DiseaseTimelineResp {
    private long disease_timeline_id;
    private UUID member_id;
    private String nickname;
    private String image;
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime created_at;
    private DiseaseResultResp disease;

    @Builder
    public DiseaseTimelineResp(long disease_timeline_id, UUID member_id, String nickname, String image, LocalDateTime created_at, DiseaseResultResp disease) {
        this.disease_timeline_id = disease_timeline_id;
        this.member_id = member_id;
        this.nickname = nickname;
        this.image = image;
        this.created_at = created_at;
        this.disease = disease;
    }

    @Builder
    public DiseaseTimelineResp(DiseaseTimeline timeline) {
        this.disease_timeline_id = timeline.getDiseaseTimelineId();
        this.member_id = timeline.getMember().getMemberId();
        this.nickname = timeline.getMember().getNickname();
        this.image = timeline.getImage();
        this.created_at = timeline.getCreatedAt();
//        this.created_at = LocalDateTime.now();
        this.disease = new DiseaseResultResp(timeline.getDisease());
    }
}

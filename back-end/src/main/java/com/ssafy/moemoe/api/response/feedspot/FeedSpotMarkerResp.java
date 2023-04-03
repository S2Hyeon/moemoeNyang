package com.ssafy.moemoe.api.response.feedspot;


import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class FeedSpotMarkerResp {

    private long feedspot_id;
    private String name;
    private String description;
    private String image;
    private double lat;
    private double lng;
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime recentFeedTime;
    private int isActive;

    @Builder
    public FeedSpotMarkerResp(long feedspot_id, String name, String description, String image, double lat, double lng, LocalDateTime recentFeedTime, int isActive) {
        this.feedspot_id = feedspot_id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.lat = lat;
        this.lng = lng;
        this.recentFeedTime = recentFeedTime;
        this.isActive = isActive;
    }
}

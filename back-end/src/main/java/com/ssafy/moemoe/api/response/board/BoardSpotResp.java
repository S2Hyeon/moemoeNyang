package com.ssafy.moemoe.api.response.board;

import lombok.Builder;

import java.time.LocalDateTime;

public class BoardSpotResp {

    private long board_id;
    private String image;
    private double lat;
    private double lng;
    private LocalDateTime created_at;


    @Builder
    public BoardSpotResp(long board_id, String image, double lat, double lng, LocalDateTime created_at) {
        this.board_id = board_id;
        this.image = image;
        this.lat = lat;
        this.lng = lng;
        this.created_at = created_at;
    }
}

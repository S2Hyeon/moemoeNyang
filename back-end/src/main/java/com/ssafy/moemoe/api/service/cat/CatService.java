package com.ssafy.moemoe.api.service.cat;

import com.ssafy.moemoe.api.request.cat.CatInfoReq;
import com.ssafy.moemoe.api.response.board.BoardSpotResp;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.db.entity.cat.Cat;

import java.util.List;
import java.util.UUID;

public interface CatService {
    boolean insertCat(UUID memberId, CatInfoReq catInfoReq);

    List<CatListResp> getCats(UUID memberId, Long universityId);

    CatDetailResp getCat(UUID memberId, Long catId);

    List<BoardSpotResp> getCatSpots(UUID memberId, Long catId);


    default CatDetailResp toCatDetailResp(Cat cat, Float lat, Float lng, Long isFollowing) {
        return CatDetailResp.builder()
                .catId(cat.getCatId())
                .name(cat.getName())
                .age(cat.getAge())
                .gender(cat.getGender())
                .followerCnt(cat.getFollowerCnt())
                .image(cat.getImage())
                .lat(lat)
                .lng(lng)
                .isFollowing(isFollowing)
                .build();
    }
}

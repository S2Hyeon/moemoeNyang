package com.ssafy.moemoe.api.service.cat;

import com.ssafy.moemoe.api.request.CatInfoReq;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.db.entity.Cat;

import java.util.List;

public interface CatService {
    boolean insertCat(String memberId, CatInfoReq catInfoReq);

    List<CatListResp> getCats(String memberId, Long universityId);

    CatDetailResp getCat(Long catId);


    default Cat toEntity(CatInfoReq catInfoReq) {
        return Cat.builder()
//                .university(catInfoReq.getUniversityId()) university 엔티티로 들어갈 예정
                .name(catInfoReq.getName())
                .age(catInfoReq.getAge())
                .gender(catInfoReq.getGender())
                .image("S3를 통한 링크 추가 예정")
                .build();
    }

    default CatDetailResp toCatDetailResp(Cat cat, Float lat, Float lng) {
        return CatDetailResp.builder()
                .catId(cat.getCatId())
                .name(cat.getName())
                .age(cat.getAge())
                .gender(cat.getGender())
                .followerCnt(cat.getFollowerCnt())
                .image("S3를 통한 링크 추가 예정")
                .lat(lat)
                .lng(lng)
                .build();
    }
}

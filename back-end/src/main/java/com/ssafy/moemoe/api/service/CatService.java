package com.ssafy.moemoe.api.service;

import com.ssafy.moemoe.api.request.CatInfoReq;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.db.entity.Cat;

import java.util.List;

public interface CatService {
    boolean insertCat(String memberId, CatInfoReq catInfoReq);

    List<CatListResp> getCats(String memberId, Long universityId);


    default Cat toEntity(CatInfoReq catInfoReq) {
        return Cat.builder()
                .universityId(catInfoReq.getUniversityId())
                .name(catInfoReq.getName())
                .age(catInfoReq.getAge())
                .gender(catInfoReq.getGender())
                .image("S3를 통한 링크 추가 예정")
                .build();
    }
}

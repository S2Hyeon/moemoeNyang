package com.ssafy.moemoe.api.service.cat;

import com.ssafy.moemoe.api.request.CatInfoReq;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.db.entity.Cat;
import com.ssafy.moemoe.db.repository.cat.CatCustomRepository;
import com.ssafy.moemoe.db.repository.cat.CatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class CatServiceImpl implements CatService{

    private final CatRepository catRepository;
    private final CatCustomRepository catCustomRepository;

    @Override
    public boolean insertCat(String memberId, CatInfoReq catInfoReq) {
        // 멤버 유효성 검사 추가 예정, university 엔티티 인자로 넘길 예정
        Cat cat = toEntity(catInfoReq);

        catRepository.save(cat);

        return true;
    }

    @Override
    public List<CatListResp> getCats(String memberId, Long universityId) {
        return catCustomRepository.getCats(UUID.fromString(memberId), universityId);
    }

    @Override
    public CatDetailResp getCat(Long catId) {
        Optional<Cat> cat = catRepository.findCatByCatId(catId);
        // 위도, 경도 값은 게시판 레포에서 얻어온다.
        return cat.map(catDetail -> toCatDetailResp(catDetail, 37.501258F, 127.039516F)).orElse(null);

    }


}

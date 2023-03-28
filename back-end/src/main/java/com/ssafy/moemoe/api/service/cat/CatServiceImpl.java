package com.ssafy.moemoe.api.service.cat;

import com.ssafy.moemoe.api.request.cat.CatInfoReq;
import com.ssafy.moemoe.api.response.cat.CatDetailResp;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.service.university.UniversityService;
import com.ssafy.moemoe.db.entity.cat.Cat;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.entity.university.University;
import com.ssafy.moemoe.db.repository.cat.CatCustomRepository;
import com.ssafy.moemoe.db.repository.cat.CatRepository;
import com.ssafy.moemoe.db.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class CatServiceImpl implements CatService{

    private final Logger LOGGER = LoggerFactory.getLogger(CatServiceImpl.class);

    private final CatRepository catRepository;
    private final CatCustomRepository catCustomRepository;
    private final UniversityService universityService;
    private final MemberRepository memberRepository;


    @Override
    public boolean insertCat(UUID memberId, CatInfoReq catInfoReq) {

        Member member = memberRepository.findByMemberId(memberId);
        University university = universityService.getUniversity(catInfoReq.getUniversityId());
        if(member == null || university == null)
            return false;

        LOGGER.info("========insertCat : memberId {}, catInfoReq {}", memberId, catInfoReq);
        Cat cat = new Cat(catInfoReq, university);
        catRepository.save(cat);
        return true;
    }

    @Override
    public List<CatListResp> getCats(UUID memberId, Long universityId) {
        Member member = memberRepository.findByMemberId(memberId);
        University university = universityService.getUniversity(universityId);
        if(member == null || university == null)
            return null;

        return catCustomRepository.getCats(memberId, universityId);
    }

    @Override
    public CatDetailResp getCat(UUID memberId, Long catId) {
        Member member = memberRepository.findByMemberId(memberId);
        Cat cat = catRepository.findCatByCatId(catId).orElse(null);
        if(member == null || cat == null)
            return null;
        // 위도, 경도 값은 게시판 레포에서 얻어온다.
        return toCatDetailResp(cat, 37.501258F, 127.039516F);

    }


}

package com.ssafy.moemoe.api.service.disease;

import com.ssafy.moemoe.api.request.disease.DiseaseTimelineRegistReq;
import com.ssafy.moemoe.db.entity.disease.Disease;
import com.ssafy.moemoe.db.entity.disease.DiseaseTimeline;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.entity.cat.Cat;
import com.ssafy.moemoe.db.repository.cat.CatRepository;
import com.ssafy.moemoe.db.repository.disease.DiseaseRepository;
import com.ssafy.moemoe.db.repository.disease.DiseaseTimelineRepository;
import com.ssafy.moemoe.db.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DiseaseServiceImpl implements DiseaseService{

    private final MemberRepository memberRepository;
    private final CatRepository catRepository;
    private final DiseaseRepository diseaseRepository;
    private final DiseaseTimelineRepository diseaseTimelineRepository;

    @Override
    public Long registDiseaseTimeline(UUID memberId, Long catId, DiseaseTimelineRegistReq form) {
        //Member, Cat, Disease 객체 받아와야함
        Member member = memberRepository.findByMemberId(memberId);
        Cat cat = catRepository.findCatByCatId(catId).get();
        Disease disease = diseaseRepository.findByDiseaseId(form.getDiseaseId());
        DiseaseTimeline diseaseTimeline = new DiseaseTimeline(member, cat, disease, form.getImage());
        diseaseTimelineRepository.save(diseaseTimeline);

        return diseaseTimeline.getDiseaseTimelineId();
    }

    @Override
    public List<DiseaseTimeline> getDiseaseTimelines(Long catId) {
        return null;
    }
}

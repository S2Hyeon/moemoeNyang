package com.ssafy.moemoe.api.service.disease;

import com.ssafy.moemoe.api.request.disease.DiseaseTimelineRegistReq;
import com.ssafy.moemoe.api.response.cat.DiseaseTimelineResp;
import com.ssafy.moemoe.api.response.disease.DiseaseDetailResp;
import com.ssafy.moemoe.api.service.S3Uploader;
import com.ssafy.moemoe.db.entity.cat.Cat;
import com.ssafy.moemoe.db.entity.disease.Disease;
import com.ssafy.moemoe.db.entity.disease.DiseaseTimeline;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.repository.cat.CatRepository;
import com.ssafy.moemoe.db.repository.disease.DiseaseRepository;
import com.ssafy.moemoe.db.repository.disease.DiseaseTimelineRepository;
import com.ssafy.moemoe.db.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DiseaseServiceImpl implements DiseaseService{

    private final Logger LOGGER = LoggerFactory.getLogger(DiseaseServiceImpl.class);
    private final MemberRepository memberRepository;
    private final CatRepository catRepository;
    private final DiseaseRepository diseaseRepository;
    private final DiseaseTimelineRepository diseaseTimelineRepository;
    private final S3Uploader s3Uploader;

    @Override
    public Long registDiseaseTimeline(UUID memberId, Long catId, DiseaseTimelineRegistReq form) {
        Member member = memberRepository.findByMemberId(memberId);
        Cat cat = catRepository.findCatByCatId(catId).get();
        Disease disease = diseaseRepository.findByDiseaseId(form.getDiseaseId());

        // S3에 이미지 등록
        MultipartFile multipartFile = form.getImage();
        String img;
        try {
            img = s3Uploader.upload(multipartFile, "disease");
        }
        catch (IOException e) {
            throw new IllegalArgumentException("파일 업로드에 문제가 발생했습니다.(disease)");
        }
        LOGGER.info("================url===============\n" + img);

        DiseaseTimeline diseaseTimeline = new DiseaseTimeline(member, cat, disease, img);
        diseaseTimelineRepository.save(diseaseTimeline);

        return diseaseTimeline.getDiseaseTimelineId();
    }

    @Override
    public DiseaseDetailResp getDiseaseDetail(String diseaseName) {
        DiseaseDetailResp diseaseDetailResp;
        switch(diseaseName) {
            case "A1" :
                diseaseDetailResp = new DiseaseDetailResp(diseaseRepository.findById(1L).orElseThrow(() -> new IllegalArgumentException("해당 Disease는 없습니다.")));
                break;
            case "A2" :
                diseaseDetailResp = new DiseaseDetailResp(diseaseRepository.findById(2L).orElseThrow(() -> new IllegalArgumentException("해당 Disease는 없습니다.")));
                break;
            case "A3" :
                diseaseDetailResp = new DiseaseDetailResp(diseaseRepository.findById(3L).orElseThrow(() -> new IllegalArgumentException("해당 Disease는 없습니다.")));
                break;
            case "A4" :
                diseaseDetailResp = new DiseaseDetailResp(diseaseRepository.findById(4L).orElseThrow(() -> new IllegalArgumentException("해당 Disease는 없습니다.")));
                break;
            case "A5" :
                diseaseDetailResp = new DiseaseDetailResp(diseaseRepository.findById(5L).orElseThrow(() -> new IllegalArgumentException("해당 Disease는 없습니다.")));
                break;
            case "A6" :
                diseaseDetailResp = new DiseaseDetailResp(diseaseRepository.findById(6L).orElseThrow(() -> new IllegalArgumentException("해당 Disease는 없습니다.")));
                break;
            default :
                diseaseDetailResp = null;
                System.out.println("예상되는 질병이 없습니다.");
                break;
        }

        return diseaseDetailResp;
    }

    @Override
    public List<DiseaseTimelineResp> getDiseaseTimelines(Long catId) {
        List<DiseaseTimeline> timelines = diseaseTimelineRepository.findByCat_CatId(catId);
        List<DiseaseTimelineResp> resps = new ArrayList<>();
        for (DiseaseTimeline t : timelines) {
            resps.add(new DiseaseTimelineResp(t));
        }
        return resps;
    }
}

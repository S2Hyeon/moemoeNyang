package com.ssafy.moemoe.api.service.disease;

import com.ssafy.moemoe.api.request.disease.DiseaseTimelineRegistReq;
import com.ssafy.moemoe.api.response.cat.DiseaseTimelineResp;
import com.ssafy.moemoe.api.response.disease.DiseaseDetailResp;

import java.util.List;
import java.util.UUID;

public interface DiseaseService {

    Long registDiseaseTimeline(UUID memberId, Long catId, DiseaseTimelineRegistReq form);

    DiseaseDetailResp getDiseaseDetail(String diseaseName);

    List<DiseaseTimelineResp> getDiseaseTimelines(Long catId);

}

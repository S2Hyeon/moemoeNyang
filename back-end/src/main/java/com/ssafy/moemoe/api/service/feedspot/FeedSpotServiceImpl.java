package com.ssafy.moemoe.api.service.feedspot;

import com.ssafy.moemoe.api.request.feedspot.RegistFeedSpotReq;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMarkerResp;
import com.ssafy.moemoe.db.entity.feedspot.FeedSpot;
import com.ssafy.moemoe.db.repository.feedspot.FeedSpotRepository;
import com.ssafy.moemoe.db.repository.member.MemberRepository;
import com.ssafy.moemoe.db.repository.university.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedSpotServiceImpl implements FeedSpotService {

    private final FeedSpotRepository feedSpotRepository;
    private final UniversityRepository universityRepository;

    private final MemberRepository memberRepository;



    @Override
    public Long registFeedSpot(UUID memberId, Long universityId, RegistFeedSpotReq form) {
        FeedSpot feedSpot = FeedSpot.builder()
                .university(universityRepository.findById(universityId).get())
                .member(memberRepository.findByMemberId(memberId))
                .lng(form.getLng())
                .name(form.getName())
                .description(form.getDescription())
                .isActive(true)
                .lat(form.getLat())
                .image(form.getImage())
                .build();
        feedSpotRepository.save(feedSpot);
        return feedSpot.getFeedspotId();
    }

    @Override
    public List<FeedSpotMarkerResp> getFeedSpots(Long universityId) {
        List<FeedSpot> feedSpotList = feedSpotRepository.findByUniversityUniversityId(universityId);
        List<FeedSpotMarkerResp> respList = new ArrayList<>();
        for (FeedSpot f : feedSpotList) {
            respList.add(FeedSpotMarkerResp.builder()
                    .feedspot_id(f.getFeedspotId())
                    .name(f.getName())
                    .description(f.getDescription())
                    .image(f.getImage())
                    .lng(f.getLng())
                    .lat(f.getLat())
                    //.recentFeedTime()
                    .build());
        }

        return respList;
    }
}

package com.ssafy.moemoe.api.service.feedspot;

import com.ssafy.moemoe.api.request.feedspot.RegistFeedSpotReq;
import com.ssafy.moemoe.db.entity.feedspot.FeedSpot;
import com.ssafy.moemoe.db.repository.feedspot.FeedSpotRepository;
import com.ssafy.moemoe.db.repository.university.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedSpotServiceImpl implements FeedSpotService {

    private final FeedSpotRepository feedSpotRepository;
    private final UniversityRepository universityRepository;

    @Override
    public Long registFeedSpot(Long universityId, RegistFeedSpotReq form) {
        FeedSpot feedSpot = FeedSpot.builder()
                .university(universityRepository.findById(universityId).get())
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
}

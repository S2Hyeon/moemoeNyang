package com.ssafy.moemoe.api.service.feedspot;

import com.ssafy.moemoe.api.request.feedspot.RegistFeedSpotReq;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMarkerResp;
import com.ssafy.moemoe.api.response.feedspot.FeedSpotMessageResp;
import com.ssafy.moemoe.db.entity.feedspot.Feed;
import com.ssafy.moemoe.db.entity.feedspot.FeedSpot;
import com.ssafy.moemoe.db.repository.feedspot.FeedRepository;
import com.ssafy.moemoe.db.repository.feedspot.FeedSpotRepository;
import com.ssafy.moemoe.db.repository.member.MemberRepository;
import com.ssafy.moemoe.db.repository.university.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedSpotServiceImpl implements FeedSpotService {

    private final FeedSpotRepository feedSpotRepository;
    private final UniversityRepository universityRepository;
    private final MemberRepository memberRepository;
    private final FeedRepository feedSpotFeedRepository;



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
        List<FeedSpot> feedSpotList = feedSpotRepository.findByUniversity_UniversityId(universityId);
        List<FeedSpotMarkerResp> respList = new ArrayList<>();
        for (FeedSpot f : feedSpotList) {
            Optional<LocalDateTime> recent = feedSpotFeedRepository.findMostRecentCreatedAtByFeedspotId(f.getFeedspotId());
            LocalDateTime time;
            if(recent.isPresent()){ //최근 급여내역이 있으면
                time = recent.get();
            } else { //급여 내역이 없으면
                time = LocalDateTime.MIN; //가장 작은 값을 넣어서 등록된 글이 없음을 알려주기
            }
            respList.add(FeedSpotMarkerResp.builder()
                    .feedspot_id(f.getFeedspotId())
                    .name(f.getName())
                    .description(f.getDescription())
                    .image(f.getImage())
                    .lng(f.getLng())
                    .lat(f.getLat())
                    .recentFeedTime(time)
                    .build());
        }

        return respList;
    }

    @Override
    public Long createFeed(UUID memberId, Long feedspotId) {
        Feed feed = Feed.builder()
                .createdAt(LocalDateTime.now())
                .feedspot(feedSpotRepository.findById(feedspotId).get())
                .member(memberRepository.findByMemberId(memberId))
                .build();
        feedSpotFeedRepository.save(feed);
        return feed.getFeedTimelineId();
    }

    @Override
    public List<FeedSpotMessageResp> getFeeds(Long feedspotId) {
        List<Feed> feeds = feedSpotFeedRepository.findByFeedspotFeedspotId(feedspotId);
        List<FeedSpotMessageResp> respList = new ArrayList<>();
        for (Feed f : feeds) {
            UUID uid = f.getMember().getMemberId();
            respList.add(FeedSpotMessageResp.builder()
                    .created_at(LocalDateTime.now())
                    .member_id(uid)
                    .nickname(memberRepository.findByMemberId(uid).getNickname())
                    .build());
        }
        return respList;
    }
}

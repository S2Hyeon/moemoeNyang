package com.ssafy.moemoe.api.service.follow;

import com.ssafy.moemoe.db.entity.cat.Cat;
import com.ssafy.moemoe.db.entity.follow.Follow;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.repository.cat.CatRepository;
import com.ssafy.moemoe.db.repository.follow.FollowRepository;
import com.ssafy.moemoe.db.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {
    private final Logger LOGGER = LoggerFactory.getLogger(FollowServiceImpl.class);

    private final FollowRepository followRepository;
    private final CatRepository catRepository;
    private final MemberRepository memberRepository;

    @Override
    public boolean insertFollow(UUID memberId, Long catId) {

        LOGGER.info("===========insertFollow============\nmemberId : {}, catId : {}",memberId, catId);
        Member member = memberRepository.findByMemberId(memberId);
        Cat cat = catRepository.findCatByCatId(catId).orElse(null);
        Follow isFollowing = followRepository.findByMember_MemberIdAndCat_CatId(memberId, catId).orElse(null);
        LOGGER.info("===========insertFollow============\nisFollowing : {}",isFollowing);
        if(cat == null || isFollowing != null)
            return false;

        cat.updateFollowCnt(cat.getFollowerCnt() + 1);
        Follow follow = new Follow(member, cat);
        followRepository.save(follow);
        return true;
    }

    @Override
    public boolean deleteFollow(UUID memberId, Long catId) {
        LOGGER.info("===========deleteFollow============\nmemberId : {}, catId : {}",memberId, catId);
        Follow follow = followRepository.findByMember_MemberIdAndCat_CatId(memberId, catId).orElse(null);
        Cat cat = catRepository.findCatByCatId(catId).orElse(null);
        if(follow == null || cat == null)
            return false;
        LOGGER.info("===========deleteFollow============\nfollow : {}, cat : {}",follow, cat);
        cat.updateFollowCnt(cat.getFollowerCnt() - 1);
        followRepository.deleteById(follow.getFollowId());
        return true;
    }
}

package com.ssafy.moemoe.api.service.follow;

import com.ssafy.moemoe.db.entity.Follow;
import com.ssafy.moemoe.db.repository.follow.FollowRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class FollowServiceImpl implements FollowService {

    private final FollowRepository followRepository;

    @Override
    public boolean insertFollow(String memberId, Long catId) {
        // 멤버 유효성 검사 추가 예정, 멤버, 고양이 엔티티로 넘길 예정
        Follow follow = toEntity(UUID.fromString(memberId), catId);
        followRepository.save(follow);
        return true;
    }

    @Override
    public boolean deleteFollow(String memberId, Long catId) {
        // 멤버 유효성 검사 추가 예정;
        Optional<Follow> follow = followRepository.findByMember_MemberIdAndCat_CatId(UUID.fromString(memberId), catId);
        if(follow.isPresent()) {
            followRepository.deleteById(follow.get().getFollowId());
        }
        else
            return false;
        return true;
    }
}

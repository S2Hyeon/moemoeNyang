package com.ssafy.moemoe.db.repository.cat;

import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.response.cat.QCatListResp;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

import static com.ssafy.moemoe.db.entity.cat.QCat.cat;
import static com.ssafy.moemoe.db.entity.follow.QFollow.follow;

@Repository
@RequiredArgsConstructor
public class CatCustomRepositoryImpl implements CatCustomRepository {

    private final JPAQueryFactory query;

    @Override
    public List<CatListResp> getCats(UUID memberId, Long universityId) {
        NumberExpression<Long> isFollowing = follow.member.memberId.when(memberId).then(1L).otherwise(0L);
        return query
                .select(new QCatListResp(cat, isFollowing))
                .from(cat)
                .leftJoin(follow)
                .on(cat.catId.eq(follow.cat.catId), follow.member.memberId.eq(memberId))
                .where(cat.isActive.eq(1), cat.university.universityId.eq(universityId))
                .orderBy(isFollowing.desc(), cat.followerCnt.desc())
                .fetch();
    }
}

package com.ssafy.moemoe.db.repository.cat;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.moemoe.api.response.cat.CatListResp;
import com.ssafy.moemoe.api.response.cat.QCatListResp;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

import static com.ssafy.moemoe.db.entity.QCat.cat;
import static com.ssafy.moemoe.db.entity.QFollow.follow;

@Repository
public class CatCustomRepositoryImpl implements CatCustomRepository {

    private final JPAQueryFactory query;

    public CatCustomRepositoryImpl(JPAQueryFactory query) {
        this.query = query;
    }

    @Override
    public List<CatListResp> getCats(UUID memberId, Long universityId) {


        return query
                .select(new QCatListResp(cat.catId, cat.name, cat.age, cat.gender, cat.followerCnt, cat.image, follow.catId))
                .from(cat)
                .leftJoin(follow)
                .on(cat.catId.eq(follow.catId), follow.memberId.eq(memberId))
                .where(cat.isActive.eq(1), cat.universityId.eq(universityId))
                .groupBy(cat.catId)
                .orderBy(follow.catId.count().desc(), cat.followerCnt.desc())
                .fetch();
    }
}

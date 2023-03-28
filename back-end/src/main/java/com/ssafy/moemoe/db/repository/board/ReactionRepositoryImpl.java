package com.ssafy.moemoe.db.repository.board;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.moemoe.api.request.board.ReactionDetailReq;
import com.ssafy.moemoe.api.response.board.QTagLoadResp;
import com.ssafy.moemoe.api.response.board.TagLoadResp;
import com.ssafy.moemoe.db.entity.board.QReaction;
import com.ssafy.moemoe.db.entity.board.QTag;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.UUID;

/**
 * Reaction 관련 디비 쿼리 생성을 위한 구현 정의.
 */
public class ReactionRepositoryImpl implements ReactionRepositoryCustom {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    QReaction qReaction = QReaction.reaction;

    @Override
    public void deleteReation(UUID member_id, ReactionDetailReq reactionDetailReq) {
        Long findDoneId = jpaQueryFactory
                .select(qReaction.reactionId)
                .from(qReaction)
                .where(reatEq(reactionDetailReq.getEmotion()), qReaction.member.memberId.eq(member_id), qReaction.board.boardId.eq(reactionDetailReq.getBoardId()))
                .fetchOne();

        long affectedRows = jpaQueryFactory
                .delete(qReaction)
                .where(qReaction.reactionId.in(findDoneId))
                .execute();
    }

    private BooleanExpression reatEq(String reat) {
        return reat.isEmpty() ? null : qReaction.reat.contains(reat);
    }

}

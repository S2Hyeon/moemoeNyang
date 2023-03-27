package com.ssafy.moemoe.db.repository.board;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.moemoe.api.response.board.QTagLoadResp;
import com.ssafy.moemoe.api.response.board.TagLoadResp;
import com.ssafy.moemoe.db.entity.board.QTag;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * 유저 모델 관련 디비 쿼리 생성을 위한 구현 정의.
 */
public class TagRepositoryImpl implements TagRepositoryCustom {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    QTag qTag = QTag.tag;

    @Override
    public List<TagLoadResp> findByBoardId(Long boardId) {
        return jpaQueryFactory
                .select(new QTagLoadResp(qTag))
                .from(qTag)
                .where(qTag.board.boardId.eq(boardId))
                .fetch();
    }
}

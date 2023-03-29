package com.ssafy.moemoe.db.repository.board;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.moemoe.api.response.board.BoardLoadResp;
import com.ssafy.moemoe.api.response.board.QBoardLoadResp;
import com.ssafy.moemoe.db.entity.cat.QCat;
import com.ssafy.moemoe.db.entity.board.Board;
import com.ssafy.moemoe.db.entity.board.QBoard;
import com.ssafy.moemoe.db.entity.board.QTag;
import com.ssafy.moemoe.db.entity.member.QMember;
import com.ssafy.moemoe.db.entity.university.QUniversity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import java.util.List;

/**
 * 유저 모델 관련 디비 쿼리 생성을 위한 구현 정의.
 */
public class BoardRepositoryImpl implements BoardRepositoryCustom {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    QBoard qBoard = QBoard.board;
    QTag qTag = QTag.tag;
    QUniversity qUniversity = QUniversity.university;
    QCat qCat = QCat.cat;
    QMember qMember = QMember.member;

    @Override
    public Page<BoardLoadResp> findBoardByIdAndTag(Long universityId, String tagName, Pageable pageable) {

        List<BoardLoadResp> content = jpaQueryFactory
                .select(new QBoardLoadResp(qBoard, qCat, qMember, qUniversity))
                .from(qBoard)
                .leftJoin(qBoard.tagList, qTag)
                .leftJoin(qBoard.cat, qCat)
                .leftJoin(qBoard.member, qMember)
                .leftJoin(qBoard.university, qUniversity)
//                .where(wordEq(word), categoryEq(categoryName), qInterview.interviewState.eq(4), qApplicant.user.id.isNull().or(qApplicant.user.id.ne(user_id)))
                .where(tagNameEq(tagName), qUniversity.universityId.eq(universityId))
                .orderBy(qBoard.createdAt.asc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Board> countQuery = jpaQueryFactory
                .select(qBoard)
                .from(qBoard)
                .where(tagNameEq(tagName), qUniversity.universityId.eq(universityId));

        return PageableExecutionUtils.getPage(content, pageable, () -> countQuery.fetchCount());
    }

    private BooleanExpression tagNameEq(String tagName) {
        if(tagName == null){
            return null;
        }else{
            return qTag.name.eq(tagName);
        }
//        return tagName.isEmpty() ? null :
    }
}

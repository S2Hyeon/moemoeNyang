package com.ssafy.moemoe.db.repository.board;

import com.ssafy.moemoe.api.request.board.ReactionDetailReq;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Reaction 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface ReactionCustomRepository {
    /**
     * 게시물의 이모지 삭제
     *
     * @param member_id         Member Id
     * @param reactionDetailReq board Id, reat가 들어있는 객체
     */
    void deleteReation(UUID member_id, ReactionDetailReq reactionDetailReq);

    /**
     * 게시물의 이모지 등록한지 체크
     *
     * @param memberId
     * @param boardId
     */
    String checkReation(UUID memberId, Long boardId);

}
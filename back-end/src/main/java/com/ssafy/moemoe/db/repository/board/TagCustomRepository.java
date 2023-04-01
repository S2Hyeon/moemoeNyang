package com.ssafy.moemoe.db.repository.board;

import com.ssafy.moemoe.api.response.board.TagLoadResp;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Board 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface TagCustomRepository { // Board 생성 Method

    /**
     * 메인페이지 - 게시물 별 tag 리스트
     *
     * @param boardId      Board id
     * @return 검색 결과
     */
    List<TagLoadResp> findByBoardId(Long boardId);

}
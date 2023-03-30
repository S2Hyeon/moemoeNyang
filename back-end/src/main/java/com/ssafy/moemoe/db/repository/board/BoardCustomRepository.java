package com.ssafy.moemoe.db.repository.board;

import com.ssafy.moemoe.api.response.board.BoardLoadResp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

/**
 * Board 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface BoardCustomRepository { // Board 생성 Method

    /**
     * 메인페이지 - 게시물 리스트 조회
     *
     * @param universityId      대학교 id
     * @param tagName    인터뷰 상태
     * @return 검색 결과
     */
    Page<BoardLoadResp> findBoardByIdAndTag(Long universityId, String tagName, Pageable pageable);

}
package com.ssafy.moemoe.db.repository.board;

import com.ssafy.moemoe.db.entity.board.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Board 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface BoardRepository extends JpaRepository<Board, Long>, BoardCustomRepository {

    List<Board> findTop10ByCat_CatIdOrderByCreatedAtDesc(Long catId);
    List<Board> findByCat_CatIdOrderByCreatedAtDesc(Long catId);
    Optional<Board> findTop1ByCat_CatIdOrderByCreatedAtDesc(Long catId);

    //사용자 ID로 검색해서 작성한 게시글 숫자 조회
    Long countByMember_MemberId(UUID memberId);

    //사용자 ID로 검색해서 받은 react 갯수 조회
    @Query( "SELECT SUM(p.recommend + p.good + p.impressed + p.sad + p.angry) " +
            "FROM Board p " +
            "WHERE p.member.memberId = :memberId")
    Long findTotalReactByMemberId(@Param("memberId") UUID memberId);
}
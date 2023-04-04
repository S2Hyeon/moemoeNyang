package com.ssafy.moemoe.db.repository.board;

import com.ssafy.moemoe.db.entity.board.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Board 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface BoardRepository extends JpaRepository<Board, Long>, BoardCustomRepository {

    List<Board> findTop10ByCat_CatIdOrderByCreatedAtDesc(Long catId);
    List<Board> findByCat_CatIdOrderByCreatedAtDesc(Long catId);
    Optional<Board> findTop1ByCat_CatIdOrderByCreatedAtDesc(Long catId);
}
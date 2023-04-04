package com.ssafy.moemoe.db.repository.board;

import com.ssafy.moemoe.db.entity.board.Reaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

/**
 * Board 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface ReactionRepository extends JpaRepository<Reaction, Long>, ReactionCustomRepository {

    Optional<Reaction> findByMemberMemberIdAndBoardBoardId(UUID memberId, Long boardId);
}
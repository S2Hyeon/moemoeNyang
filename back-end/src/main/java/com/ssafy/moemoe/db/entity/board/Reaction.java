package com.ssafy.moemoe.db.entity.board;

import com.ssafy.moemoe.db.entity.member.Member;
import lombok.*;

import javax.persistence.*;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reactionId = null;

    private String reat;

    // ManyToOne 관계 설정
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    private Reaction(String reat, Board board, Member member) {
        this.reat = reat;
        this.board = board;
        this.member = member;
    }

}

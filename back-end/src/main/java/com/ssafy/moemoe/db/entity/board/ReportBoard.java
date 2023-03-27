package com.ssafy.moemoe.db.entity.board;

import com.ssafy.moemoe.db.entity.member.Member;
import com.vladmihalcea.hibernate.type.json.JsonType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Map;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@TypeDef(name = "json", typeClass = JsonType.class)
@Builder
public class ReportBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reportBoardId = null;

    @Type(type = "json")
    @Column(columnDefinition = "json")
    private Map<String, Object> data = new HashMap<>();

//    private static ReportBoard of(Map<String, Object> data) {
//        return new ReportBoard(null, data);
//    }

    // ManyToOne 관계 설정
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

}

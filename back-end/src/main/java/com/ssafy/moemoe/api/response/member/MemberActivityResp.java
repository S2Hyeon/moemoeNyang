package com.ssafy.moemoe.api.response.member;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class MemberActivityResp {

    private Long feed_cnt;
    private Long post_cnt;
    private Long cat_regist_cnt;
    private Long react_cnt;
    private Long disease_regist_cnt;
    private Long report_cnt;
    private Long login_days_cnt;

    @Builder
    public MemberActivityResp(Long feed_cnt, Long post_cnt, Long cat_regist_cnt,
                              Long react_cnt, Long disease_regist_cnt, Long report_cnt, Long login_days_cnt) {
        this.feed_cnt = feed_cnt;
        this.post_cnt = post_cnt;
        this.cat_regist_cnt = cat_regist_cnt;
        this.react_cnt = react_cnt;
        this.disease_regist_cnt = disease_regist_cnt;
        this.report_cnt = report_cnt;
        this.login_days_cnt = login_days_cnt;
    }

}

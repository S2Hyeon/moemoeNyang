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

    private int feed_cnt;
    private int post_cnt;
    private int cat_regist_cnt;
    private int react_cnt;
    private int disease_regist_cnt;
    private int report_cnt;
    private int login_days_cnt;

    @Builder
    public MemberActivityResp(int feed_cnt, int post_cnt, int cat_regist_cnt, int react_cnt, int disease_regist_cnt, int report_cnt, int login_days_cnt) {
        this.feed_cnt = feed_cnt;
        this.post_cnt = post_cnt;
        this.cat_regist_cnt = cat_regist_cnt;
        this.react_cnt = react_cnt;
        this.disease_regist_cnt = disease_regist_cnt;
        this.report_cnt = report_cnt;
        this.login_days_cnt = login_days_cnt;
    }

}

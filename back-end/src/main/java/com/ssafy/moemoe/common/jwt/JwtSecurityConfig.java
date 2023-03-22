package com.ssafy.moemoe.common.jwt;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/*
TokenProvider를 주입 받아서 JwtFilter 를 Securty 로직에 등록하기 위한 클래스
 */
public class JwtSecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
    private TokenProvider tokenProvider;

    /*
    TokenProvider를 주입받기
     */
//    블로그에는 해당 내용이 없어서 일단 주석처리
//    public JwtSecurityConfig(TokenProvider tokenProvider) {
//        this.tokenProvider = tokenProvider;
//    }

    /*
    JwtFilter를 통해 Security로직에 필터를 등록
     */
    @Override
    public void configure(HttpSecurity http){
        JwtFilter customFilter = new JwtFilter(tokenProvider);
        http.addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);
    }
}


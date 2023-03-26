package com.ssafy.moemoe.config.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 예제 13.17
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationFilter.class);
    private final JwtTokenProvider jwtTokenProvider;

    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest servletRequest,
                                    HttpServletResponse servletResponse,
                                    FilterChain filterChain) throws ServletException, IOException {
        String token = jwtTokenProvider.resolveToken(servletRequest);
        LOGGER.info("[doFilterInternal] token 값 추출 완료. token : {}", token);

        LOGGER.info("[doFilterInternal] token 값 유효성 체크 시작");
        if (token != null && jwtTokenProvider.validateToken(token)) {
            LOGGER.info("1---------------- 여길 못오는거임?");
            Authentication authentication = jwtTokenProvider.getAuthentication(token);
            LOGGER.info("2---------------- 여길 못오는거임?");
            SecurityContextHolder.getContext().setAuthentication(authentication);
            LOGGER.info("3---------------- 여길 못오는거임?");
            LOGGER.info("[doFilterInternal] token 값 유효성 체크 완료");
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }
}

package com.ssafy.moemoe.config;

import com.ssafy.moemoe.common.jwt.JwtAccessDeniedHandler;
import com.ssafy.moemoe.common.jwt.JwtAuthenticationEntryPoint;
import com.ssafy.moemoe.common.jwt.JwtSecurityConfig;
import com.ssafy.moemoe.common.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final TokenProvider tokenProvider;
    private final JwtAuthenticationEntryPoint jwtAtuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer(){
        return (web) -> web.ignoring()
                .antMatchers("/favicon.ico");
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf().disable()

                /**401, 403 Exception 핸들링 */
                .exceptionHandling()
                .authenticationEntryPoint(jwtAtuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)

                /**세션 사용하지 않음*/
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                /** HttpServletRequest를 사용하는 요청들에 대한 접근 제한 설정*/
                .and()
                .authorizeRequests()
                .antMatchers("/authenticate").permitAll()

                /**JwtSecurityConfig 적용 */
                .and()
//                .apply(new JwtSecurityConfig(tokenProvider))
//
//                .and() 여기오류나서 수정함
                .build();
    }
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
//        httpSecurity
//                // token을 사용하는 방식이기 때문에 csrf를 disable합니다.
//                .csrf().disable()
//
//                .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
//
//                .exceptionHandling()
//                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
//                .accessDeniedHandler(jwtAccessDeniedHandler)
//
//                // enable h2-console
//                .and()
//                .headers()
//                .frameOptions()
//                .sameOrigin()
//
//                // 세션을 사용하지 않기 때문에 STATELESS로 설정
//                .and()
//                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//
//                .and()
//                .authorizeHttpRequests()
//                //인증이 필요하지 않은 요청들
//                //주로 로그인이 안된 상태에서 보내는 요청들임.
//                .antMatchers("/auth/hello", "/auth/authenticate", "/auth/signup").permitAll() //, "/api/authenticate", "/api/signup"
//                .requestMatchers(PathRequest.toH2Console()).permitAll()
//                //인증이 필요한 요청들
//                .anyRequest().authenticated()
//
//                .and()
//                .apply(new JwtSecurityConfig(tokenProvider));
//
//        return httpSecurity.build();
//    }


}
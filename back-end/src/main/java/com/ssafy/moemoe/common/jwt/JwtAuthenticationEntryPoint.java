package com.ssafy.moemoe.common.jwt;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ssafy.moemoe.api.response.auth.ResVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

/*
유효한 자격증명을 제공하지 않고 접근하려 할 때 401 Unauthorized 에러를 리턴할 클래스
 */
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) throws IOException {
        // 유효한 자격증명을 제공하지 않고 접근하려 할때 401
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
    }

//    private final Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationEntryPoint.class);
//    ErrorCode 클래스가 없어서 에러남..
//    @Override
//    public void commence(HttpServletRequest request, HttpServletResponse response,
//                         AuthenticationException authException) throws IOException, ServletException {
//        PrintWriter writer = response.getWriter();
//        ErrorCode errorCode = CommonErrorCode.UNAUTHORIZED;
//        ResVO res = ResVO.builder()
//                .status(errorCode.getResultCode())
//                .message(errorCode.getResultMsg()).build();
//        try{
//            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
//            writer.write(CmmnVar.GSON.toJson(res));
//        }catch(NullPointerException e){
//            LOGGER.error("응답 메시지 작성 에러", e);
//        }finally{
//            if(writer != null) {
//                writer.flush();
//                writer.close();
//            }
//        }
//        response.getWriter().write(CmmnVar.GSON.toJson(res));
//    }
}


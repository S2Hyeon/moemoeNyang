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
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

/*
필요한 권한이 존재하지 않는 경우에 403 Forbidden에러를 리턴하기 위한 핸들러
403 Fobidden Exception 처리를 위한 클래스 입니다.
공통적인 응답을 위한 ResVO 는 아래 작성하였고,
Object to Json을 위한 CmmnVar.GSON은 공통 스태틱 클래스에 생성해 놓은 Gson 입니다.
 */
@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler{

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException {
        //필요한 권한이 없이 접근하려 할때 403
        response.sendError(HttpServletResponse.SC_FORBIDDEN);
    }

//    ErrorCode 클래스가 없어서 오류남;;
//    @Override
//    public void handle(HttpServletRequest request, HttpServletResponse response,
//                       AccessDeniedException accessDeniedException) throws IOException, ServletException {
//        PrintWriter writer = response.getWriter();
//        ErrorCode errorCode = CommonErrorCode.FORBIDDEN;
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
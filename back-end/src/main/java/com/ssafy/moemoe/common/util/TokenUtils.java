package com.ssafy.moemoe.common.util;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

@Component
public class TokenUtils {

    @Value("${springboot.jwt.secret}")
    private String secretKey = "secretKey";

    public Claims getClaimsFromRequest(HttpServletRequest request){
        String jwtToken = request.getHeader("X-AUTH-TOKEN");

        return Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
    }


}

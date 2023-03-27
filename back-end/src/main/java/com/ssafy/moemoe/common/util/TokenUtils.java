package com.ssafy.moemoe.common.util;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;

import javax.servlet.http.HttpServletRequest;

public class TokenUtils {

    @Value("${springboot.jwt.secret}")
    private static String secretKey = "secretKey";

    public static Claims getClaimsFromRequest(HttpServletRequest request){
        String jwtToken = request.getHeader("X-AUTH-TOKEN");
        return Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
    }


}

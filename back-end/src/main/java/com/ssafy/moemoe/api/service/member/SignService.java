package com.ssafy.moemoe.api.service.member;


import com.ssafy.moemoe.db.dto.SignInResultDto;
import com.ssafy.moemoe.db.dto.SignUpResultDto;

// 예제 13.24
public interface SignService {

    SignUpResultDto signUp(String id, String password, String name, String role);

    SignInResultDto signIn(String id, String password) throws RuntimeException;

}
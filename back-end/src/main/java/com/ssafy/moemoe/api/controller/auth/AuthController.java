package com.ssafy.moemoe.api.controller.auth;

import com.ssafy.moemoe.api.request.member.SignInReq;
import com.ssafy.moemoe.api.request.member.SignUpReq;
import com.ssafy.moemoe.api.service.member.SignService;
import com.ssafy.moemoe.db.dto.SignInResultDto;
import com.ssafy.moemoe.db.dto.SignUpResultDto;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

// 예제 13.28
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final Logger LOGGER = LoggerFactory.getLogger(AuthController.class);
    private final SignService signService;

    @Autowired
    public AuthController(SignService signService) {
        this.signService = signService;
    }

    @PostMapping(value = "/login")
    public SignInResultDto signIn(@RequestBody SignInReq form)
            throws RuntimeException {
        LOGGER.info("[signIn] 로그인을 시도하고 있습니다. id : {}, pw : ****", form.getEmail());
        SignInResultDto signInResultDto = signService.signIn(form.getEmail(), form.getPassword());

        if (signInResultDto.getCode() == 0) {
            LOGGER.info("[signIn] 정상적으로 로그인되었습니다. id : {}, token : {}", form.getEmail(),
                    signInResultDto.getToken());
        }
        return signInResultDto;
    }

    @PostMapping(value = "/sign-up")
    public SignUpResultDto signUp(@RequestBody SignUpReq form) {
        LOGGER.info("[signUp] 회원가입을 수행합니다. id : {}, password : ****, name : {}",form.getEmail(), form.getNickname());

        SignUpResultDto signUpResultDto = signService.signUp(form);
        
        LOGGER.info("[signUp] 회원가입을 완료했습니다. id : {}", form.getEmail());
        return signUpResultDto;
    }

    @GetMapping(value = "/check-email")
    public ResponseEntity<Map<String, String>> checkDuplicateEmail(
            @ApiParam(value = "email", required = true) @RequestParam String email){
        Map<String, String> map = new HashMap<>();
        String YorN = signService.checkDuplicateEmail(email); //중복되면Y, 아니면N
        map.put("msg", YorN);
        return ResponseEntity.ok(map);
    }

    @PostMapping(value = "/reset-pwd")
    public ResponseEntity<Map<String, String>> resetPassword(@RequestBody SignInReq form) {
        LOGGER.info("[resetPW] 패스워드 변경을 시도하고 있습니다. id : {}, pw : ****", form.getEmail());
        signService.changePasswordByEmail(form.getEmail(), form.getPassword());
        Map<String, String> map = new HashMap<>();
        map.put("msg", "비밀번호를 재설정 했습니다.");
        return ResponseEntity.ok(map);
    }

    @GetMapping(value = "/exception")
    public void exceptionTest() throws RuntimeException {
        throw new RuntimeException("접근이 금지되었습니다.");
    }

}
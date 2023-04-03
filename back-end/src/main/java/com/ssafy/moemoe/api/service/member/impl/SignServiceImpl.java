package com.ssafy.moemoe.api.service.member.impl;

import com.ssafy.moemoe.api.request.member.SignUpReq;
import com.ssafy.moemoe.api.request.member.UpdateMemberReq;
import com.ssafy.moemoe.api.service.member.SignService;
import com.ssafy.moemoe.common.CommonResponse;
import com.ssafy.moemoe.config.security.JwtTokenProvider;
import com.ssafy.moemoe.db.dto.SignInResultDto;
import com.ssafy.moemoe.db.dto.SignUpResultDto;
import com.ssafy.moemoe.db.entity.member.Member;
import com.ssafy.moemoe.db.repository.member.BadgeRepository;
import com.ssafy.moemoe.db.repository.member.MemberRepository;
import com.ssafy.moemoe.db.repository.university.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;


// 예제 13.25
@Service
@RequiredArgsConstructor
public class SignServiceImpl implements SignService {

    private final Logger LOGGER = LoggerFactory.getLogger(SignServiceImpl.class);

    private final MemberRepository memberRepository;
    private final UniversityRepository universityRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final BadgeRepository badgeRepository;
    private final PasswordEncoder passwordEncoder;


    //이메일 중복체크
    @Override
    public String checkDuplicateEmail(String email) {
        if (memberRepository.existsByEmail(email)) { //이메일이 있는지?
            return "Y"; //있음 = 중복된 이메일
        } else {
            return "N"; //없음 = 가입 가능한 이메일
        }
    }

    @Override
    public void changePasswordByEmail(String email, String newPassword) {
        Member member = memberRepository.findByEmail(email);
        member.setPassword(passwordEncoder.encode(newPassword));
        memberRepository.save(member);
    }

    @Override
    public void updateMember(UUID memberId, UpdateMemberReq form) {
        Member member = memberRepository.findByMemberId(memberId);
        LOGGER.info("[getSignUpResult] 회원 가입 정보 전달");
        member.setNickname(form.getNickname());
        member.setUniversity(universityRepository.getById(form.getUniversityId()));
        member.setPassword(passwordEncoder.encode(form.getPassword()));
        member.setBadge(badgeRepository.findById(form.getBadgeId()).get());

        memberRepository.save(member);
    }

    @Override
    public Member getMember(UUID memberId) {
        return memberRepository.findByMemberId(memberId);
    }

    @Override
    public SignUpResultDto signUp(SignUpReq form) {
        LOGGER.info("[getSignUpResult] 회원 가입 정보 전달");
        Member member = Member.builder()
                .email(form.getEmail())
                .nickname(form.getNickname())
                .password(passwordEncoder.encode(form.getPassword()))
                .created_at(LocalDateTime.now())
                .university(universityRepository.getById(form.getUniversityId()))
                .badge(badgeRepository.findById(1L).get()) //디폴트 뱃지로 설정
                .build();

        Member savedMember = memberRepository.save(member);
        SignUpResultDto signUpResultDto = new SignInResultDto();

        LOGGER.info("[getSignUpResult] userEntity 값이 들어왔는지 확인 후 결과값 주입");
        if (!savedMember.getNickname().isEmpty()) {
            LOGGER.info("[getSignUpResult] 정상 처리 완료");
            setSuccessResult(signUpResultDto);
        } else {
            LOGGER.info("[getSignUpResult] 실패 처리 완료");
            setFailResult(signUpResultDto);
        }
        return signUpResultDto;
    }

    @Override
    public SignInResultDto signIn(String id, String password) throws RuntimeException {
        LOGGER.info("[getSignInResult] signDataHandler 로 회원 정보 요청");
        Member member = memberRepository.getByEmail(id);
        LOGGER.info("[getSignInResult] Id : {}", id);

        LOGGER.info("[getSignInResult] 패스워드 비교 수행");
        if (!passwordEncoder.matches(password, member.getPassword())) {
            throw new RuntimeException();
        }
        LOGGER.info("[getSignInResult] 패스워드 일치");

        LOGGER.info("[getSignInResult] SignInResultDto 객체 생성");
        SignInResultDto signInResultDto = SignInResultDto.builder()
                .token(jwtTokenProvider.createToken(String.valueOf(member.getEmail()),
                        member.getRoles()))
                .build();

        LOGGER.info("[getSignInResult] SignInResultDto 객체에 값 주입");
        setSuccessResult(signInResultDto);

        return signInResultDto;
    }

    // 결과 모델에 api 요청 성공 데이터를 세팅해주는 메소드
    private void setSuccessResult(SignUpResultDto result) {
        result.setSuccess(true);
        result.setCode(CommonResponse.SUCCESS.getCode());
        result.setMsg(CommonResponse.SUCCESS.getMsg());
    }

    // 결과 모델에 api 요청 실패 데이터를 세팅해주는 메소드
    private void setFailResult(SignUpResultDto result) {
        result.setSuccess(false);
        result.setCode(CommonResponse.FAIL.getCode());
        result.setMsg(CommonResponse.FAIL.getMsg());
    }
}
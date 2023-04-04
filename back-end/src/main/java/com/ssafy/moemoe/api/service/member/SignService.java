package com.ssafy.moemoe.api.service.member;


import com.ssafy.moemoe.api.request.member.SignUpReq;
import com.ssafy.moemoe.api.request.member.UpdateMemberReq;
import com.ssafy.moemoe.db.dto.SignInResultDto;
import com.ssafy.moemoe.db.dto.SignUpResultDto;
import com.ssafy.moemoe.db.entity.member.Member;

import java.util.UUID;

// 예제 13.24
public interface SignService {

    SignUpResultDto signUp(SignUpReq form);

    SignInResultDto signIn(String id, String password) throws RuntimeException;

    String checkDuplicateEmail(String email);

    void changePasswordByEmail(String email, String newPassword);

    void updateMember(UUID memberId, UpdateMemberReq form);

    void updateBadge(UUID memberId, Long badgeId);

    Member getMember(UUID memberId);
}
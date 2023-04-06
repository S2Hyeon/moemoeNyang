import React, { useEffect, useState } from "react";
import Input from "../components/common/Input";
import { postFindPassword, postLogin } from "../services/member";
import { getCookie, setCookie } from "../utils/handleCookies";
import { AlertError, AlertSuccess, AlertWarning } from "../utils/alertToastify";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

import { useDispatch } from "react-redux";
import { setMemberObject } from "../store/memberSlice";
import { typedUseSelector } from "../store";
import { getUserInfo } from "../services/mypage";
import jwtDecode from "jwt-decode";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const member = typedUseSelector((state) => state.member.memberObject);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgetPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = () => {
    if (!email || !password) return AlertWarning("정보를 입력해주세요");
    if (!(email.includes("@") && email.includes("."))) {
      return AlertWarning("잘못된 이메일입니다.");
    }
    postLogin(email, password)
      .then((res) => {
        const accessToken = res.data.token;
        const decodedTokenObject = jwtDecode(accessToken);
        const { email, member_id, nickname, university_id } =
          decodedTokenObject;
        // getUserInfo().then((res) => {
        dispatch(
          setMemberObject({
            accessToken,
            memberId: member_id,
            universityId: university_id,
            nickname: nickname,
            email: email,
          }),
        );
        return Promise.resolve();
      })
      .then(() => {
        AlertSuccess("로그인 되었습니다.");
        navigate("/main");
      });
  };

  const onForget = () => {
    if (!email) return AlertWarning("정보를 입력해주세요");
    if (!(email.includes("@") && email.includes("."))) {
      return AlertWarning("잘못된 이메일입니다.");
    }
    setIsLoading(true);
    postFindPassword(email).then((res) => {
      AlertSuccess(res.data.msg);
      setIsForgetPassword(false);
      setIsLoading(false);
    });
  };

  const FormButton = isForgotPassword ? (
    <Button onClick={onForget}>비밀번호 초기화하기</Button>
  ) : (
    <Button onClick={onLogin}>로그인</Button>
  );

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10 w-full">
        <img
          src="/images/logo2.png"
          alt="logo"
          className="absolute -top-3/4 flex-grow-0 flex-shrink-0 w-[134px] h-[143px] object-cover"
        />
        <div className={`w-2/3 ${isLoading && "invisible"}`}>
          <Input
            placeholder="이메일"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={isForgotPassword && "invisible"}
          />
          {FormButton}

          {/* 비밀번호 초기화기능 배제 */}
          {/* <p
            className="text-[15px] text-center py-4 text-[#727272]"
            onClick={() => {
              setIsForgetPassword((prev) => !prev);
            }}
          >
            {isForgotPassword ? "로그인 하시겠어요?" : "비밀번호를 잊으셨나요?"}
          </p> */}
          <p className="비밀번호초기화용클래스 text-[15px] text-center py-4 text-[#727272]"></p>
        </div>

        <div className="flex gap-[5px]">
          <p className="text-[15px] text-left text-[#727272]">
            아직 계정이 없으신가요?
          </p>
          <p
            className="flex-grow-0 flex-shrink-0 w-[60px] h-[27px] text-[15px] font-bold text-left text-[#ff7f7f]"
            onClick={() => navigate("/signup")}
            role="button"
          >
            회원가입
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

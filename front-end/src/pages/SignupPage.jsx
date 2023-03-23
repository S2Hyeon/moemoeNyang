import React from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const SignupPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10 w-full">
        {/* <img
          src="/images/logo2.png"
          alt="logo"
          className="absolute -top-1/4 flex-grow-0 flex-shrink-0 w-[134px] h-[143px] object-cover"
        /> */}
        <p className="text-xl font-bold text-center text-black">
          <span className="text-xl font-bold text-center  text-black">
            회원가입
          </span>
        </p>
        <div className="w-2/3">
          <div id="이메일인증컨테이너" className="flex gap-[5px]">
            <Input autoFocus={true} placeholder="이메일" type="text" />
            <div className="w-2/5">
              <Button>인증하기</Button>
            </div>
          </div>
          <Input placeholder="인증번호" type="text" />
          <div id="소속학교 선택 컨테이너" className="flex gap-[5px]">
            <Input
              autoFocus={true}
              placeholder="소속학교"
              type="text"
              disabled={true}
            />
            <div className="w-2/5">
              <Button>인증하기</Button>
            </div>
          </div>
          <Input placeholder="닉네임" type="password" />
          <Input placeholder="비밀번호" type="password" />
          <Input placeholder="비밀번호 확인" type="password" />
          <Button style="disabled">회원가입</Button>
          <p className="BottomMessage text-[15px] text-center py-4 text-lisa-500">
            이메일을 인증해라
          </p>
        </div>
        <div className="flex gap-[5px]">
          <p className="text-[15px] text-left text-[#727272]">
            기존 계정으로 로그인하시겠어요?
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-[60px] h-[27px] text-[15px] font-bold text-left text-[#ff7f7f]">
            로그인
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

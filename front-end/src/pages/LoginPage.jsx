import React from "react";
import Input from "../components/common/Input";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10 w-full">
        <img
          src="/images/logo2.png"
          alt="logo"
          className="absolute -top-3/4 flex-grow-0 flex-shrink-0 w-[134px] h-[143px] object-cover"
        />
        <div className="w-2/3">
          <Input placeholder="이메일" type="email" />
          <Input placeholder="비밀번호" type="password" />
          <div className="w-full h-8 rounded-[10px] bg-[#ffe5e5] flex justify-center items-center">
            <p className="text-base font-bold text-center text-[#727272]">
              로그인
            </p>
          </div>
          <p className="text-[15px] text-center py-4 text-[#727272]">
            비밀번호를 잊으셨나요?
          </p>
        </div>
        <div className="flex gap-[5px]">
          <p className="text-[15px] text-left text-[#727272]">
            아직 계정이 없으신가요?
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-[60px] h-[27px] text-[15px] font-bold text-left text-[#ff7f7f]">
            회원가입
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

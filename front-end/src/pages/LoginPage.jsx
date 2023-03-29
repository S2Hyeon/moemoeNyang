import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
        <img
          src="/images/logo2.png"
          alt="logo"
          className="absolute -top-2/4 flex-grow-0 flex-shrink-0 w-[134px] h-[143px] object-cover"
        />
        <div>
          <p className="text-xl font-bold text-center text-black pb-5">
            <span className="text-xl font-bold text-center  text-black">
              로그인
            </span>
          </p>
          <div id="이메일인증예시" className="flex gap-[5px]">
            <input
              autoFocus={true}
              className={`text-xs w-full mb-2 rounded border px-2 py-2 focus:outline-none active:outline-none bg-[#FCFDFD] border-gray-300`}
              placeholder="이메일인증예시"
              type="text"
            />
            <div className="w-1/3">
              <div className="w-full h-8 rounded-[10px] bg-[#ffe5e5] flex justify-center items-center">
                <p className="text-base font-bold text-center text-[#727272]">
                  인증하기
                </p>
              </div>
            </div>
          </div>
          <input
            autoFocus={true}
            className={`text-xs w-full mb-2 rounded border px-2 py-2 focus:outline-none active:outline-none bg-[#FCFDFD] border-gray-300`}
            placeholder="이메일"
            type="text"
          />
          <input
            autoFocus={true}
            className={`text-xs w-full mb-2 rounded border px-2 py-2 focus:outline-none active:outline-none bg-[#FCFDFD] border-gray-300`}
            placeholder="비밀번호"
            type="text"
          />
          <div className="w-full h-8 rounded-[10px] bg-[#ffe5e5] flex justify-center items-center">
            <p className="text-base font-bold text-center text-[#727272]">
              Login
            </p>
          </div>
          <p className="text-[15px] text-center py-4 text-[#727272]">
            Forgot password?
          </p>
        </div>
        <div className="flex gap-[5px]">
          <p className="text-[15px] text-left text-[#727272]">
            Have an account?
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-[60px] h-[27px] text-[15px] font-bold text-left text-[#ff7f7f]">
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

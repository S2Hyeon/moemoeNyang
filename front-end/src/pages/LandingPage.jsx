import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    //1초 후 로그인 화면으로 이동합니다.
    setTimeout(() => {
      navigate("/login");
    }, 1 * 1500);
  }, []);

  // const navigateToMain = () => {
  //   navigate("/main");
  // };

  return (
    <>
      {/* <button onClick={navigateToMain} className="bg-slate-400">
        메인으로
      </button> */}
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
          <p className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-center text-black">
            <span className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-center text-black">
              귀여운
              <br />
              캠퍼스
              <br />
              길고양이
              <br />
              관리
            </span>
          </p>
          <img
            src="/images/logo2.png"
            alt="logo"
            className="flex-grow-0 flex-shrink-0 w-[300px] h-[300px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;

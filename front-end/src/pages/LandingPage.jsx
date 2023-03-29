import React from "react";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
        <p className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-center text-black">
          <span className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-center text-black">
            대충
            <br />
            개쩌는
            <br />
            서비스
            <br />
            소개 문구
          </span>
        </p>
        <img
          src="/images/logo2.png"
          alt="logo"
          className="flex-grow-0 flex-shrink-0 w-[300px] h-[300px] object-contain"
        />
      </div>
    </div>
  );
};

export default LandingPage;

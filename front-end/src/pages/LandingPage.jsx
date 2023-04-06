import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/handleCookies";
import { AlertSuccess } from "../utils/alertToastify";
import jwtDecode from "jwt-decode";
import { typedUseSelector } from "../store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMemberObject } from "../store/memberSlice";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState(() => {
    const token = getCookie("accessToken");
    return token;
  });
  const universityId = typedUseSelector(
    (state) => state.member.memberObject.universityId,
  );

  useEffect(() => {
    if (!accessToken) return;
    const decodedTokenObject = jwtDecode(accessToken);
    const { email, member_id, nickname, university_id } = decodedTokenObject;
    dispatch(
      setMemberObject({
        accessToken,
        memberId: member_id,
        universityId: university_id,
        nickname: nickname,
        email: email,
      }),
    );
  }, [accessToken]);

  setTimeout(() => {
    if (universityId) {
      AlertSuccess("로그인 되었습니다.");
      navigate("/main");
    } else {
      navigate("/login");
    }
  }, 1 * 1500);

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

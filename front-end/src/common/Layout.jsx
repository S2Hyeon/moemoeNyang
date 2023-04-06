import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { typedUseSelector } from "../store";
import Navbar from "./footer/Navbar";
import Header from "./header/Header";
import { AlertError } from "../utils/alertToastify";
import { useDispatch } from "react-redux";
import { setMemberObject } from "../store/memberSlice";
import { setCookie } from "../utils/handleCookies";
import styled from "styled-components";

const Layout = () => {
  const member = typedUseSelector((state) => state.member.memberObject);

  /*
 email: "ssafytest@test.com",
 member_id: "7d4c40f8-d7a2-4f1e-afc6-6ecfb89105da",
 university_id: 1,
 nickname: "ssafy1234느낌표",

*/
  const dispatch = useDispatch();
  if (!member) {
    // 기존거
    // return <Navigate to="/login" {...AlertError("로그인이 필요하다냥")} />;

    // 새로운거
    setCookie(
      "accessToken",
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzc2FmeXRlc3RAdGVzdC5jb20iLCJlbWFpbCI6InNzYWZ5dGVzdEB0ZXN0LmNvbSIsIm1lbWJlcl9pZCI6IjdkNGM0MGY4LWQ3YTItNGYxZS1hZmM2LTZlY2ZiODkxMDVkYSIsInVuaXZlcnNpdHlfaWQiOjEsIm5pY2tuYW1lIjoic3NhZnkxMjM064qQ64KM7ZGcIiwiaWF0IjoxNjgwMjIxODcxLCJleHAiOjE2ODAyMjU0NzF9.1FrZd6vzCqQvB6RRux6_sTKsvx5b4aVgRO4eNhmpkI4",
    );
    dispatch(
      setMemberObject({
        accessToken:
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzc2FmeXRlc3RAdGVzdC5jb20iLCJlbWFpbCI6InNzYWZ5dGVzdEB0ZXN0LmNvbSIsIm1lbWJlcl9pZCI6IjdkNGM0MGY4LWQ3YTItNGYxZS1hZmM2LTZlY2ZiODkxMDVkYSIsInVuaXZlcnNpdHlfaWQiOjEsIm5pY2tuYW1lIjoic3NhZnkxMjM064qQ64KM7ZGcIiwiaWF0IjoxNjgwMjIxODcxLCJleHAiOjE2ODAyMjU0NzF9.1FrZd6vzCqQvB6RRux6_sTKsvx5b4aVgRO4eNhmpkI4",
        memberId: "7d4c40f8-d7a2-4f1e-afc6-6ecfb89105da",
        universityId: 1,
        nickname: "ssafy1234느낌표",
        email: "ssafytest@test.com",
      }),
    );
  }

  const [innerHeight, setInnerHeight] = useState(0)
  useEffect(()=>{
    setInnerHeight(window.innerHeight)
  },[])

  const StyledContainer = styled.div`
    height: ${innerHeight}px;
  `
  // 테일윈드 레이아웃 https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom
  return (
    <StyledContainer className="flex flex-col top-0 sticky justify-between overflow-hidden">
      <Header className="w-screen" />
      <div className="mb-auto w-screen overflow-scroll">
        <Outlet />
      </div>
      <Navbar className="w-screen z-10" />
    </StyledContainer>
  );
};

export default Layout;

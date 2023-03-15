import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component }) {
  const isLogin =
    true ||
    !!JSON.parse(sessionStorage.getItem("accessToken")) ||
    !!JSON.parse(localStorage.getItem("accessToken"));
  return isLogin ? (
    component
  ) : (
    <Navigate to="/login" {...alert("로그인이 필요한 서비스입니다.")} />
  );
}

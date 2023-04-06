import React, { useState, useEffect } from "react";
import { BsMap } from "@react-icons/all-files/bs/BsMap";
import { useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { getUserInfo } from "../../services/mypage";

export default function Header() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo().then((res) => setUserInfo(res.data));
  }, []);

  useEffect(() => {
    if (!userInfo.length) return;
  }, [userInfo]);

  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate("/map");
  };

  const navigateToMain = () => {
    navigate("/main");
  };

  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");
  if (isAdmin) return <AdminHeader />;

  return (
    <div className="h-12 flex flex-shrink-0 justify-center items-center bg-lisa-300">
      <div
        className="text-lg font-bold text-slate-900"
        onClick={navigateToMain}
      >
        {userInfo.university_name}
      </div>
      <BsMap onClick={navigateToMap} className="absolute top-4 right-4" />
    </div>
  );
}

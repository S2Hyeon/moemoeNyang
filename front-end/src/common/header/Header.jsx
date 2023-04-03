import React, { useState, useEffect } from "react";
import { BsMap } from "@react-icons/all-files/bs/BsMap";
import { useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { getUserInfo } from "../../services/mypage";

export default function Header() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo().then((res) => setUserInfo(res.data));
    console.log("user Info 불러오기");
    console.log(userInfo);
  }, []);

  useEffect(() => {
    if (!userInfo.length) return;
    console.log("user Info 불러오기");
    console.log(userInfo);
  }, [userInfo]);

  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate("/map");
  };

  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");
  if (isAdmin) return <AdminHeader />;

  return (
    <div className="h-12 flex flex-shrink-0 justify-center items-center bg-lisa-300">
      <div className="text-lg font-bold text-slate-900">
        {userInfo.university_name}
      </div>
      <BsMap onClick={navigateToMap} className="absolute top-4 right-4" />
    </div>
  );
}

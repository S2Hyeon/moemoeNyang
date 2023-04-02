import React from "react";
import { RiSettings4Fill } from "@react-icons/all-files/ri/RiSettings4Fill";
import { useNavigate } from "react-router-dom";

export default function ProfileBox({ userInfo }) {
  const navigate = useNavigate();

  const navigateToModifyUserInfo = () => {
    navigate("/mypage/modify");
  };

  return (
    <div className="flex items-center relative p-5">
      <img
        className="w-20"
        src="/images/badgeImg/cat_1.png"
        alt="대표배지이미지"
      />
      <div className="ml-4">
        <div className="font-bold text-2xl mb-2">{userInfo.nickname}</div>
        <div className="font-bold text-sm">{userInfo.university_name}</div>
      </div>
      <RiSettings4Fill
        onClick={navigateToModifyUserInfo}
        className="absolute top-4 right-6 text-lisa-500 w-6 h-6"
      />
    </div>
  );
}

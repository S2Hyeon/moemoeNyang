import React, { useState, useEffect } from "react";
import { RiSettings4Fill } from "@react-icons/all-files/ri/RiSettings4Fill";
import { getUserInfo, postUserInfo } from "../../services/mypage";
import { useNavigate } from "react-router-dom";

export default function ProfileBox() {
  const navigate = useNavigate();

  const navigateToModifyUserInfo = () => {
    navigate("/mypage/modify");
  };

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo().then((res) => setUserInfo(res.data));
  }, []);

  useEffect(() => {
    if (!userInfo.length) return;
    console.log("user Info 불러오기");
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className="flex items-center relative p-5">
      <img
        className="w-20"
<<<<<<< HEAD
        src="/images/badgeImg/cat_1.png"
=======
        src={`/images/badgeImg/cat_regist_cnt_${userInfo.reward_id + 1}.png`}
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
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

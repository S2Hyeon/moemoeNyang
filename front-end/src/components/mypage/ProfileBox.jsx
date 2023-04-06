import React from "react";
import { RiSettings4Fill } from "@react-icons/all-files/ri/RiSettings4Fill";
import { useNavigate } from "react-router-dom";
import "animate.css";
import Button from "../common/Button";
import { delCookie } from "../../utils/handleCookies";
import { AlertSuccess } from "../../utils/alertToastify";

export default function ProfileBox({ userInfo }) {
  const navigate = useNavigate();

  const navigateToModifyUserInfo = () => {
    navigate("/mypage/modify");
  };

  const badgeName = [
    "",
    "cat_regist_cnt_1",
    "cat_regist_cnt_5",
    "cat_regist_cnt_10",
    "disease_1",
    "disease_3",
    "disease_6",
    "feed_cnt_1",
    "feed_cnt_10",
    "feed_cnt_20",
    "login_days_cnt_7",
    "login_days_cnt_30",
    "login_days_cnt_100",
    "post_1",
    "post_3",
    "post_6",
    "react_cnt_5",
    "react_cnt_10",
    "react_cnt_20",
    "report_cnt_5",
    "report_cnt_10",
    "report_cnt_20",
  ];

  const badge = badgeName[userInfo.badge_id];

  const onLogout = () => {
    delCookie("accessToken");
    sessionStorage.clear();
    localStorage.clear();
    AlertSuccess("로그아웃 되었습니다.");
    navigate("/login");
  };

  return (
    <div className="flex items-center relative p-5">
      <img
        className="w-20 "
        src={`/images/badgeImg/${badge}.png`}
        alt="대표배지이미지"
      />
      <div className="ml-4">
        <div className="font-bold text-2xl mb-2">{userInfo.nickname}</div>
        <div className="font-bold text-sm">{userInfo.university_name}</div>
      </div>
      <div className="flex-col ml-auto">
        <RiSettings4Fill
          onClick={navigateToModifyUserInfo}
          className="text-lisa-500 w-6 h-6 mb-5 ml-auto"
        />
        <Button className="top-12 right-6 p-1" onClick={onLogout}>
          <div className="text-xs">로그아웃</div>
        </Button>
      </div>
    </div>
  );
}

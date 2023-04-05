import React, { useState, useEffect } from "react";
import BadgeList from "../../components/mypage/BadgeList";
import ProfileBox from "../../components/mypage/ProfileBox";
import { getUserInfo } from "../../services/mypage";
import FollowCatList from "../../components/mypage/FollowCatList";

export default function Mypage() {
  const [toggle, setToggle] = useState(true);

  const [userInfo, setUserInfo] = useState([]);
  const [badgeId, setBadgeId] = useState(0);

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo(res.data);
      setBadgeId(res.data.badge_id);
    });
    console.log("user Info 불러오기");
    console.log(userInfo);
  }, []);

  useEffect(() => {
    console.log("badgeId가 변경됨 => ", badgeId);
    getUserInfo().then((res) => {
      setUserInfo(res.data);
      setBadgeId(res.data.badge_id);
    });
  }, [badgeId]);

  useEffect(() => {
    if (!userInfo.length) return;

    console.log("user Info 불러오기");
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div>
      <ProfileBox userInfo={userInfo} />
      <div className="flex pl-4 pr-4 mb-2">
        <div
          onClick={() => setToggle(true)}
          className={`grid place-items-center ${
            toggle ? "bg-lisa-200" : "bg-slate-200"
          }  w-1/2 h-8 rounded-l-2xl font-bold`}
        >
          배지
        </div>
        <div
          onClick={() => setToggle(false)}
          className={`grid place-items-center ${
            toggle ? "bg-slate-200" : "bg-lisa-200"
          } w-1/2 h-8 rounded-r-2xl font-semibold`}
        >
          고양이 리스트
        </div>
      </div>
      {toggle ? (
        <BadgeList badgeId={badgeId} setBadgeId={setBadgeId} />
      ) : (
        <FollowCatList />
      )}
    </div>
  );
}

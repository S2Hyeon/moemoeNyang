import React, { useState } from "react";
import BadgeList from "../../components/mypage/BadgeList";
import CatList from "../../components/mypage/CatList";
import ProfileBox from "../../components/mypage/ProfileBox";

export default function Mypage() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <ProfileBox />
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
      {toggle ? <BadgeList /> : <CatList />}
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function CatProfileBox({ catInfo }) {
  const navigate = useNavigate();

  const navigateSymptomResult = (catId) => {
    navigate(`/cats/${catId}/diseases`);
  };

  return (
    <div className="flex mt-4 mb-4 w-full ">
      <img
        className="w-full rounded-full"
        src={catInfo.image}
        alt="고양이 이미지"
      />
      <div className="pl-8 w-full">
        <div className="font-bold text-sm">{catInfo.name}</div>
        <div className="font-bold text-sm">{catInfo.age}살</div>
        <div className="font-bold text-sm">{catInfo.gender}</div>
        <div className="font-bold text-sm">
          팔로워 : {catInfo.follower_cnt}명
        </div>
        <div
          className="grid place-items-center bg-red-200 rounded-2xl mt-2 h-8 text-white font-bold text-sm"
          onClick={() => navigateSymptomResult(catInfo.cat_id)}
        >
          질병 리스트
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function CatProfileBox({ catInfo }) {
  const navigate = useNavigate();

  const navigateSymptomResult = (catId) => {
    navigate(`/cats/${catId}/diseases`);
  };

  return (
    <div className="flex mt-2 mb-4 w-full ">
      <div className="w-2/5 p-2">
        <img
          className="w-[130px] h-[130px] object-fill rounded-full	 "
          src={catInfo.image}
          alt="고양이 이미지"
        />
      </div>

      <div className="w-3/5 p-2 mt-2">
        <div className="font-bold text-sm">이 름 : {catInfo.name}</div>
        <div className="font-bold text-sm">나 이 : {catInfo.age}살</div>
        <div className="font-bold text-sm">성 별 : {catInfo.gender}</div>
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

import React from "react";
import { useNavigate } from "react-router-dom";

export default function CatCard({ catInfo }) {
  const navigate = useNavigate();

  const navigateToCatDetail = (catId) => {
    console.log("detail로 이동", catId);
    navigate(`/cats/${catId}`);
  };

  return (
    <div
      className="flex flex-col w-2/5 rounded-xl shadow-lg m-4"
      onClick={() => navigateToCatDetail(catInfo.cat_id)}
    >
      <div className="relative">
        <img
          className="rounded-t-xl w-full h-32"
          src={catInfo.image}
          alt="고양이프로필사진"
        />
        {catInfo.is_following? <img
          className="absolute bottom-1 w-5 h-5 right-2"
          src="/images/button/FillStar.png"
          alt="즐겨찾기"
        /> : <></>}
      </div>
      <div>
        <div className="font-bold text-lg m-1 ml-4">이름 : {catInfo.name}</div>
        <div className="font-bold text-lg m-1 ml-4">
          성별 : {catInfo.gender}
        </div>
        <div className="font-bold text-lg m-1 ml-4">나이 : {catInfo.age}</div>
      </div>
    </div>
  );
}

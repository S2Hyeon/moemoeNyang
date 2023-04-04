import React, { useState, useEffect } from "react";
import KakaoMap from "../../components/common/KakaoMap";
import CatProfileBox from "../../components/cat/CatProfileBox";
import CatGrid from "../../components/cat/CatGrid";
import { getCatDetail, postCatFollow } from "../../services/cats";
import { useParams } from "react-router-dom";

export default function CatDetailPage() {
  const [catInfo, setCatInfo] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    getCatDetail(catId)
      .then((res) => {
        setCatInfo(res.data);
      })
      .then(() => console.log("catInfo", catInfo));
  }, []);

  useEffect(() => {
    if (!catInfo.length) return;
    console.log("cat detail page에서 catInfo 불러오기");
    console.log(catInfo);
  }, [catInfo]);

  function onFollow(catId) {
    postCatFollow(catId);
  }

  return (
    <>
      <div className=" pl-4 pr-4">
        <CatProfileBox catInfo={catInfo} />
        <div className="flex flex-col justify-center items-center">
          <button
            className="grid place-items-center rounded-full w-full h-10 bg-[#e29c9c] text-base mb-6 transition duration-200 "
            onClick={() => onFollow(catInfo.cat_id)}
          >
            <div className="font-medium text-white">팔로우</div>
          </button>
          <div
            className="MapContainer w-full h-[13vh] rounded-sm"
            style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
          >
            <KakaoMap lat={catInfo.lat} lng={catInfo.lng} />
          </div>
        </div>
        <div className="text-left font-bold text-lg mt-4 ml-4">Board</div>
        <div className="flex flex-col justify-center items-center pl-4 pr-4">
          <CatGrid catInfo={catInfo} />
        </div>
      </div>
    </>
  );
}

<<<<<<< HEAD
import React from "react"
import KakaoMap from "../../components/common/KakaoMap";
import CatProfileBox from "../../components/cat/CatProfileBox";
import CatGrid from "../../components/cat/CatGrid";

export default function CatDetailPage() {
    return(
        <div className="flex justify-center items-center">
            <div className="w-11/12 grid gap-4 py-4">
                <CatProfileBox />
                <button class="rounded-full bg-[#e29c9c] px-10 py-3 text-base mb-10 font-medium text-white transition duration-200 ">팔로우</button>
                <div
                className="MapContainer w-full h-[10vh]"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                >
                    <KakaoMap />
                </div>
                <div>
                    <CatGrid />
                </div>
            </div>
        </div>
    )
}
=======
import React, { useState, useEffect } from "react";
import KakaoMap from "../../components/common/KakaoMap";
import CatProfileBox from "../../components/cat/CatProfileBox";
import CatGrid from "../../components/cat/CatGrid";
import { getCatDetail } from "../../services/cats";
import { useParams } from "react-router-dom";

export default function CatDetailPage() {
  const [catInfo, setCatInfo] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    getCatDetail(catId).then((res) => {
      console.log("캣아이디", catId);
      console.log("데타", JSON.stringify(res));
      setCatInfo(res.data);
    });
  }, []);

  useEffect(() => {
    if (!catInfo.length) return;
    console.log("cat detail page에서 catInfo 불러오기");
    console.log(catInfo);
  }, [catInfo]);

  return (
    <>
      <div className="flex flex-col justify-center items-center pl-4 pr-4">
        <CatProfileBox catInfo={catInfo} />
        <button className="grid place-items-center rounded-full w-full h-10 bg-[#e29c9c] text-base mb-6 transition duration-200 ">
          <div className="font-medium text-white">팔로우</div>
        </button>
        <div
          className="MapContainer w-full h-[13vh] rounded-sm"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <KakaoMap catInfo={catInfo} />
        </div>
      </div>
      <div className="text-left font-bold text-lg mt-4 ml-4">Board</div>
      <div className="flex flex-col justify-center items-center pl-4 pr-4">
        <CatGrid catInfo={catInfo} />
      </div>
    </>
  );
}
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21

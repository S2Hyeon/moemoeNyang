import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import KakaoMap from "../../components/common/KakaoMap";
import KakaoMapSdk from "../../components/common/KakaoMapSdk";
import BoardContent from "../../components/map/bottom-contents/BoardContent";
import FeedContent from "../../components/map/bottom-contents/FeedContent";
import { getCatList } from "../../services/cats";
import { getMainPostList } from "../../services/main";
import { typedUseSelector } from "../../store";
import { setBottomToggle, setCatList } from "../../store/mapSlice";

const MapPage = () => {
  const dispatch = useDispatch();
  const isHigh = typedUseSelector((state) => state.map.isBottomHigh);
  const [selectedCat, setSelectedCat] = useState(null);
  const bottomSlideRef = useRef();

  const clickOutside = (e) => {
    if (!bottomSlideRef.current.contains(e.target) && isHigh === true) {
      dispatch(setBottomToggle(false));
    }
  };

  const { universityId } = typedUseSelector(
    (state) => state.member.memberObject,
  );

  const catList = typedUseSelector((state) => state.map.catList);
  useEffect(() => {
    if (catList.length) return;
    getCatList(universityId).then((res) => {
      dispatch(setCatList(res.data));
    });
  }, []);

  let bottomContent;
  const [mode, setMode] = useState("Feed");

  switch (mode) {
    case "Board":
      bottomContent = <BoardContent />;
      break;
    case "Feed":
      bottomContent = <FeedContent />;
      break;

    default:
      break;
  }

  return (
    <div onClick={clickOutside}>
      <div className="MapContainer w-screen h-[90vh]">
        <KakaoMapSdk />
      </div>
      <div
        className="absolute top-14 right-20 bg-slate-400 z-[1]"
        onClick={() => {
          setMode("Feed");
        }}
      >
        급식먹쟈
      </div>
      <div
        className="absolute top-14 right-4 bg-slate-400 z-[1]"
        onClick={() => {
          setMode("Board");
        }}
      >
        냥이보자
      </div>
      <div
        className="z-[1] absolute bottom-[46px] w-screen flex justify-center pt-6 overflow-hidden"
        ref={bottomSlideRef}
      >
        <div
          className={`BottomSheet bg-slate-50 w-[98vw] ${
            isHigh ? "h-[65vh]" : "h-[20vh]"
          } shadow-md rounded-t-2xl transition-[height]`}
        >
          <div
            className="absolute top-[0px] left-1/2 transform -translate-x-1/2 rounded-full bg-orange-300 w-12 h-12"
            onClick={() => {
              dispatch(setBottomToggle());
            }}
          ></div>
          <div className="BottomContainer mt-6 h-4/5">{bottomContent}</div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;

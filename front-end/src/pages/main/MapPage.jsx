import React, { useEffect, useRef, useState } from "react";
import KakaoMap from "../../components/common/KakaoMap";
import KakaoMapSdk from "../../components/common/KakaoMapSdk";
import BoardContent from "../../components/map/bottom-contents/BoardContent";
import FeedContent from "../../components/map/bottom-contents/FeedContent";

const MapPage = () => {
  const [isHigh, setIsHigh] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (triggered) {
      setIsHigh((prev) => !prev);
      setTriggered(false);
    }
  }, [triggered]);

  let bottomContent;
  const [mode, setMode] = useState("Feed");

  switch (mode) {
    case "Board":
      bottomContent = (
        <BoardContent setTriggered={setTriggered} isHigh={isHigh} />
      );
      break;
    case "Feed":
      bottomContent = <FeedContent />;
      break;

    default:
      break;
  }

  const bottomSlideRef = useRef();
  const clickOutside = (e) => {
    if (e.target !== bottomSlideRef.current && isHigh === true) {
      setIsHigh(false);
    }
  };
  return (
    <div onClick={clickOutside}>
      <div className="MapContainer w-screen h-[90vh]">
        {/* <KakaoMap /> */}
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
        ref={bottomSlideRef}
        className="z-[1] absolute bottom-[46px] w-screen flex justify-center pt-6 overflow-hidden"
      >
        <div
          className={`BottomSheet bg-slate-50 w-[98vw] ${
            isHigh ? "h-[65vh]" : "h-[20vh]"
          } shadow-md rounded-t-2xl transition-[height]`}
        >
          <div
            className="absolute top-[0px] left-1/2 transform -translate-x-1/2 rounded-full bg-orange-300 w-12 h-12"
            onClick={() => {
              setIsHigh(!isHigh);
            }}
          ></div>
          <div className="BottomContainer mt-6 h-4/5">{bottomContent}</div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;

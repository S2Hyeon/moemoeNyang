import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };
    let map = new window.kakao.maps.Map(container, options);
    console.log("loading kakaomap");
  }, []);

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
  return (
    <>
      <div className="MapContainer w-screen h-[90vh]">
        <div id="map" className="w-full h-full" />
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
      <div className="z-[1] absolute bottom-[-20px] w-screen flex justify-center">
        <div
          className={`BottomSheet bg-slate-50 w-[98vw] ${
            isHigh ? "h-[70vh]" : "h-[20vh]"
          } shadow-md rounded-2xl transition-[height]`}
        >
          <div
            className="absolute top-[-24px] left-1/2 transform -translate-x-1/2 rounded-full bg-orange-300 w-12 h-12"
            onClick={() => {
              setIsHigh(!isHigh);
            }}
          ></div>
          <div className="BottomContainer mt-6 h-4/5">{bottomContent}</div>
        </div>
      </div>
    </>
  );
};

export default MapPage;

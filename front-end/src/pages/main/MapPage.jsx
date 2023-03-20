/* global kakao */
import React, { useEffect } from "react";

const MapPage = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };

    let map = new window.kakao.maps.Map(container, options);

    console.log("loading kakaomap");
  }, []);

  return (
    <>
      <div>MapPage</div>
      <div className="MapContainer w-screen h-[90vh]">
        <div id="map" className="w-full h-full" />
      </div>
      <div className="z-[1] absolute bottom-[-20px] w-screen flex justify-center">
        <div className="BottomSheet bg-slate-100 w-[98vw] h-[20vh] shadow-md rounded-2xl">
          <div className="absolute top-[-24px] left-1/2 transform -translate-x-1/2 rounded-full bg-orange-300 w-12 h-12"></div>
          <div className="BottomContainer mt-6 bg-black h-4/5"></div>
        </div>
      </div>
    </>
  );
};

export default MapPage;

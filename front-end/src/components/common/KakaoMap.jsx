import React, { useEffect } from "react";

export default function KakaoMap() {
  let map;
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };
    map = new window.kakao.maps.Map(container, options);
    console.log("loading kakaomap");
  }, []);

  return <div id="map" className="w-full h-full rounded" />;
}

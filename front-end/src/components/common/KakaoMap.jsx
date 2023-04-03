import React, { useEffect } from "react";

export default function KakaoMap({ lat, lng }) {
  let map;
  useEffect(() => {
    console.log(lat, " ", lng);
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 5,
    };
    map = new window.kakao.maps.Map(container, options);
    console.log("loading kakaomap");
  }, [lat, lng]);

  return <div id="map" className="w-full h-full rounded" />;
}

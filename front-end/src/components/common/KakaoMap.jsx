import React, { useEffect } from "react";

export default function KakaoMap({ catInfo }) {
  let map;
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(catInfo.lat, catInfo.lng),
      level: 5,
    };
    map = new window.kakao.maps.Map(container, options);
    console.log("loading kakaomap");
  }, []);

  return <div id="map" className="w-full h-full rounded" />;
}

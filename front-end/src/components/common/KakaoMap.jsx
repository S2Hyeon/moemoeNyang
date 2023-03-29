import React, { useEffect } from "react";

<<<<<<< HEAD
export default function KakaoMap({ catInfo }) {
=======
export default function KakaoMap() {
>>>>>>> af335cace52712f4d8c30d384a370293d84ac79b
  let map;
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
<<<<<<< HEAD
      center: new window.kakao.maps.LatLng(catInfo.lat, catInfo.lng),
      level: 5,
=======
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
>>>>>>> af335cace52712f4d8c30d384a370293d84ac79b
    };
    map = new window.kakao.maps.Map(container, options);
    console.log("loading kakaomap");
  }, []);

  return <div id="map" className="w-full h-full rounded" />;
}

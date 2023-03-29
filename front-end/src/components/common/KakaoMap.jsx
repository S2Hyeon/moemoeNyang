import React, { useEffect } from "react";

<<<<<<< HEAD
export default function KakaoMap() {
=======
export default function KakaoMap({ catInfo }) {
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
  let map;
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
<<<<<<< HEAD
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
=======
      center: new window.kakao.maps.LatLng(catInfo.lat, catInfo.lng),
      level: 5,
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
    };
    map = new window.kakao.maps.Map(container, options);
    console.log("loading kakaomap");
  }, []);

  return <div id="map" className="w-full h-full rounded" />;
}

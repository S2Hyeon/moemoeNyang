import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMapSdk({
  center = { lat: 37.550749, lng: 126.941303 },
  isPanto = false,
  children,
}) {
  return (
    <Map
      // center={{ lat: lat || 37.550749, lng: lng || 126.941303 }}
      center={center}
      isPanto={isPanto}
      className="w-full h-full"
    >
      {children}
    </Map>
  );
}

/*
연희관 1 : {
  lat: 37.567434,
  lng: 126.939467
}
연희관 2 : {
  lat: 37.567566,
  lng: 126.938795
}
연희관 3 : {
  lat: 37.567163,
  lng: 126.938599
}

연세대학교 좌상단: {
  lat: 37.567298,
  lng: 126.935977
}


*/

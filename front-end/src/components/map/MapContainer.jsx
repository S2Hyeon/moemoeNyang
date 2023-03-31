import React, { useEffect, useState } from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { useDispatch } from "react-redux";
import { typedUseSelector } from "../../store";
import { setCenterPosition } from "../../store/mapSlice";
import KakaoMapSdk from "../common/KakaoMapSdk";

export default function MapContainer() {
  const dispatch = useDispatch();

  const catPositions = typedUseSelector((state) => state.map.catPositions);
  const centerPosition = typedUseSelector((state) => state.map.centerPosition);
  const selectedPostId = typedUseSelector((state) => state.map.selectedPostId);

  useEffect(() => {
    dispatch(setCenterPosition(catPositions[0].latlng));
  }, [catPositions]);

  //이동하는 예제
  // useEffect(() => {
  //   const latlng = JSON.parse(JSON.stringify(catPositions[0].latlng));
  //   latlng.lat = latlng.lat + Math.random() / 1000;
  //   dispatch(setCenterPosition(latlng));
  // }, [catPositions]);
  const isHigh = typedUseSelector((state) => state.map.isBottomHigh);
  return (
    <div className={`MapContainer w-screen h-[90vh]`}>
      <KakaoMapSdk
        center={centerPosition}
        isPanto={true}
        className={isHigh ? "w-full h-2/5" : "w-full h-5/6"}
      >
        {catPositions &&
          catPositions.map((position, index) => {
            let imageUrl = "/images/map/pin.png";
            if (position.boardId === selectedPostId) {
              imageUrl = "/images/map/selected-pin.png";
            }
            return (
              <CustomOverlayMap
                key={`${index.toString() + "id" + position.boardId}`}
                position={position.latlng}
              >
                <div className="w-[78px] h-[66px]">
                  <img src="/images/map/pin.png" className="object-cover" />
                  <img
                    src={position.catImage}
                    className="w-[37px] h-[37px] relative left-1/2 -top-[57%] translate-x-[-50%] translate-y-[-50%] rounded-[54px] object-cover"
                  />
                </div>
              </CustomOverlayMap>
            );
          })}
      </KakaoMapSdk>
    </div>
  );
}

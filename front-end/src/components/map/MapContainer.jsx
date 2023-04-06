import React, { useEffect, useState } from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { useDispatch } from "react-redux";
import { typedUseSelector } from "../../store";
import { setCenterPosition } from "../../store/mapSlice";
import KakaoMapSdk from "../common/KakaoMapSdk";
import BoardPin from "./BoardPin";
import FeedPin from "./FeedPin";

export default function MapContainer({ mode }) {
  const dispatch = useDispatch();

  const catPositions = typedUseSelector((state) => state.map.catPositions);
  const centerPosition = typedUseSelector((state) => state.map.centerPosition);
  const selectedPostId = typedUseSelector((state) => state.map.selectedPostId);
  const feedPositions = typedUseSelector((state) => state.map.feedPositions);

  useEffect(() => {
    dispatch(setCenterPosition(catPositions[0].latlng));
  }, [catPositions]);

  useEffect(() => {
    if (!mode) return;
  }, [mode]);

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
        {
          mode == "Board" &&catPositions &&
          catPositions.map((position, index) => {
            return (
              <CustomOverlayMap
                key={`${index.toString() + "id" + position.boardId}`}
                position={position.latlng}
              >
                <BoardPin
                  boardId={position.boardId}
                  catImage={position.catImage}
                />
              </CustomOverlayMap>
            );
          })}
        {mode === "Feed" && feedPositions &&
          feedPositions.map((position, index) => {
            return (
              <CustomOverlayMap
                key={`${index.toString() + "id" + position.feedspotId}`}
                position={position.latlng}
              >
                <FeedPin feedspotId={position.feedspotId} />
              </CustomOverlayMap>
            );
          })}
      </KakaoMapSdk>
    </div>
  );
}

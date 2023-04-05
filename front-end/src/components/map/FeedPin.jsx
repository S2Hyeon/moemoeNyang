import React, { useEffect, useState } from "react";
import { typedUseSelector } from "../../store";
import { shallowEqual, useDispatch } from "react-redux";
import {
  setCenterPosition,
  setSelectedFeed,
  setSelectedFeedLog,
} from "../../store/mapSlice";
import { getFeedLog } from "../../services/map";

export default function FeedPin({ feedspotId=null }) {
  const dispatch = useDispatch();
  const feedlist = typedUseSelector(
    (state) => state.map.feedsList,
    shallowEqual,
  );
  const onFeedSelect = () => {
    if(!feedspotId) return
    const selectedElement = feedlist.find(
      (element) => element.feedspot_id === feedspotId,
    );
    dispatch(setSelectedFeed(selectedElement));
    getFeedLog(selectedElement.feedspot_id).then((res) => {
      dispatch(setSelectedFeedLog(res.data.feeds));
    });
    dispatch(
      setCenterPosition({ lat: selectedElement.lat, lng: selectedElement.lng }),
    );
  };

  return (
    <div className="w-[78px] h-[66px]" onClick={onFeedSelect}>
      <img src="/images/map/feed-pin.png" className="object-cover" />
    </div>
  );
}

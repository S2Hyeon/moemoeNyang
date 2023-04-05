import React, { useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { getFeedLog, getFeedsList } from "../../../services/map";
import { typedUseSelector } from "../../../store";
import {
  setFeedPositions,
  setFeedsList,
  setSelectedFeed,
  setSelectedFeedLog,
} from "../../../store/mapSlice";
import timeParser from "../../../utils/timeParser";
import Button from "../../common/Button";

export default function FeedContent() {
  //채팅창디자인 https://codepen.io/robstinson/pen/oNLaLMN

  const dispatch = useDispatch();
  //시작시 스크롤을 가장 아래로 내립니다.
  const chattingRef = useRef();
  useEffect(() => {
    if (!chattingRef.current) return;
    chattingRef.current.scrollTop = chattingRef.current.scrollHeight;
  }, []);

  const feedsList = typedUseSelector((state) => state.map.feedsList);
  const selectedFeed = typedUseSelector((state) => state.map.selectedFeed);
  const [feedTimeMessage, setFeedTimeMessge] = useState("");

  const universityId = typedUseSelector(
    (state) => state.member.memberObject.universityId,
  );
  const user = typedUseSelector((state) => state.member.memberObject);
  useEffect(() => {
    getFeedsList(universityId || 1).then((res) => {
      const { feedspots } = res.data;
      dispatch(setFeedsList(feedspots));
      dispatch(setSelectedFeed(feedspots[0]));
      dispatch(
        setFeedPositions(
          feedspots.map((e) => {
            return {
              feedspotId: e.feedspot_id,
              latlng: { lat: e.lat, lng: e.lng },
            };
          }),
        ),
      );
    });
  }, []);

  const onFeedSelect = (element) => {
    dispatch(setSelectedFeed(element));
    getFeedLog(element.feedspot_id).then((res) => {
      dispatch(setSelectedFeedLog(res.data.feeds));
    });
  };

  const selectedFeedLog = typedUseSelector(
    (state) => state.map.selectedFeedLog,
    shallowEqual,
  );
  const memberId = typedUseSelector(
    (state) => state.member.memberObject.memberId,
  );

  useEffect(() => {
    if (!selectedFeed) return;
    setFeedTimeMessge(timeParser(selectedFeed.recent_feed_time));
  }, [selectedFeed]);

  return (
    selectedFeed && (
      <div>
        <div className="flex 임시로 만든 선택창">
          {feedsList.map((element, index) => {
            return (
              <div
                className="mr-5"
                key={element.feedspot_id}
                onClick={() => {
                  onFeedSelect(element);
                }}
              >
                {element.feedspot_id}
              </div>
            );
          })}
        </div>
        <div className="grid gap-3 w-11/12 mx-auto pt-2">
          <div
            className="FeedSpotInfo  h-32 left-[15.5px] top-[321.5px] rounded-[10px] bg-white flex justify-around py-2"
            style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
          >
            <img src="image-19.png" className="w-[113px] h-28  object-cover" />
            <div className="w-52 h-28 grid left-[147px] top-[338px] text-[10px] text-left text-black py-2 gap-1">
              <div>
                <span className="w-52 h-28 text-[10px] font-bold text-left text-black">
                  급식소명
                </span>
                <span className="w-52 h-28 text-[10px] text-left text-black">
                  : {selectedFeed.name}
                </span>
              </div>
              <div>
                <span className="w-52 h-28 text-[10px] font-bold text-left text-black">
                  최종 배식일
                </span>
                <span className="w-52 h-28 text-[10px] text-left text-black">
                  : {feedTimeMessage}
                </span>
              </div>
              {/* <div>
              <span className="w-52 h-28 text-[10px] font-bold text-left text-black">
                급식소 설명
              </span>
              <span className="w-52 h-28 text-[10px] text-left text-black">
                : {selectedFeed.}
              </span>
            </div> */}
              <div>
                <span className="w-52 h-28 text-xs font-bold text-left text-black">
                  급식소 설명
                </span>
                <br />
                <span className="w-52 h-28 text-xs text-left text-black">
                  {selectedFeed.description}
                </span>
              </div>
            </div>
          </div>
          <div
            className="FeedSpotInfo h-[35vh] left-[15.5px] top-[321.5px] rounded-[10px] bg-white flex justify-around pt-2"
            style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
          >
            <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
              <div
                className="flex flex-col flex-grow h-0 p-4 overflow-auto"
                ref={chattingRef}
              >
                {!selectedFeedLog.length ? (
                  <div className="flex justify-center h-full">
                    <div className="상대가쓴밥줬어요">
                      <div className="pr-5">
                        <div className="bg-slate-300 p-3 rounded-lg">
                          <p className="text-sm text-slate-800">
                            밥 준 기록이 없어요!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  selectedFeedLog.map((e) => {
                    if (e.member_id === memberId) {
                      return (
                        <div className="내가쓴밥줬어요 flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                          <div className="pl-5">
                            <div className="text-sm text-end font-bold text-gray-500 leading-none py-1">
                              {e.nickname}
                            </div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                              <p className="text-sm">밥줬다냥!!</p>
                            </div>
                            <div className="text-xs text-end py-1 text-gray-500 leading-none">
                              {timeParser(e.created_at)}
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div className="상대가쓴밥줬어요 flex w-full mt-2 space-x-3 max-w-xs">
                          <div className="pr-5">
                            <div className="text-sm font-bold text-gray-500 leading-none py-1">
                              {e.nickname}
                            </div>
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                              <p className="text-sm">밥줬다냥!!</p>
                            </div>
                            <div className="text-xs py-1 text-gray-500 leading-none">
                              {timeParser(e.created_at)}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })
                )}
              </div>
              {/* <div className="밥줬어요버튼컨테이너 bg-gray-300 p-4">
              <input
                className="flex items-center h-10 w-full rounded px-3 text-sm"
                type="text"
                placeholder="Type your message…"
              />
            </div> */}
            </div>
          </div>
          <div className="하단버튼부">
            <Button shadow={true}>밥줬다냥</Button>
          </div>
        </div>
      </div>
    )
  );
}

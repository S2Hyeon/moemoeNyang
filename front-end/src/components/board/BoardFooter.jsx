import React from "react";

import { useNavigate } from "react-router-dom";

export default function BoardFooter() {
  const navigate = useNavigate();

  const navigateToWalk = () => {
    navigate("/board/hashtag");
  };

  return (
    <div className="card-footer p-4 pt-0">
      <div className="top">
        <div className="my-2 w-full flex flex-row justify-around">
          <span className="text-sm" onClick={navigateToWalk}>
            #걷기 54%
          </span>
          <span className="text-sm">#팔 휘두르기 21%</span>
          <span className="text-sm">#앉기 6%</span>
        </div>
        <div className="icons flex flex-row justify-center items-center">
          <div className="recommend mr-4">
            <img
              src="/images/recommend.png"
              className="_8-yf5"
              height={30}
              width={30}
              alt="감정이모지"
            />
            <div className="text-center p-1">0</div>
          </div>
          <div className="like mr-4">
            <img
              src="/images/like.png"
              className="_8-yf5"
              height={30}
              width={30}
              alt="감정이모지"
            />
            <div className="text-center p-1">0</div>
          </div>
          <div className="impressed mr-4">
            <img
              src="/images/impressed.png"
              className="_8-yf5"
              height={30}
              width={30}
              alt="감정이모지"
            />
            <div className="text-center p-1">2</div>
          </div>
          <div className="sad mr-4">
            <img
              src="/images/sad.png"
              className="_8-yf5"
              height={30}
              width={30}
              alt="감정이모지"
            />
            <div className="text-center p-1">0</div>
          </div>
          <div className="sad">
            <img
              src="/images/sad.png"
              className="_8-yf5"
              height={30}
              width={30}
              alt="감정이모지"
            />
            <div className="text-center p-1">0</div>
          </div>
        </div>

        <div className="caption text-sm">
          <b>apple </b>
          new Iphone release ✨
        </div>
        <div className="post-date mt-1">
          <span className="text-xs text-gray-900">1 minute ago</span>
        </div>
      </div>
    </div>
  );
}

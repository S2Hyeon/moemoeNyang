import React from "react";

import { useNavigate } from "react-router-dom";

export default function BoardFooter({ onBottom = false, postInfo }) {
  const navigate = useNavigate();

  const navigateToWalk = () => {
    navigate("/board/hashtag");
  };

  if (onBottom) {
    const { angry, good, impressed, recommend, sad } = postInfo;
    const emojiMap = { angry, good, impressed, recommend, sad };
    const [maxEmoji, maxEmojiCount] = Object.entries(emojiMap).sort((a, b) => {
      const res = b[1] - a[1];
      if (res === 0) {
        return b[0] - a[0];
      }
      return res;
    })[0];

    return (
      <div className="card-footer p-4 pt-0">
        <div className="top">
          <div className="flex">
            <div className="my-2 w-full flex flex-row">
              <span className="text-sm" onClick={navigateToWalk}>
                {`#${postInfo.tags[0]["name"]} ${postInfo.tags[0][
                  "rate"
                ].toFixed(0)}%`}
              </span>
            </div>
            <div className="icons flex flex-row justify-center items-center">
              <div className="MaxImoji mr-4 flex">
                <img
                  src={`/images/emoji/${maxEmoji}.png`}
                  className="_8-yf5"
                  height={30}
                  width={30}
                  alt="감정이모지"
                />
                <div className="text-center p-1">{maxEmojiCount}</div>
              </div>
            </div>
          </div>
          <div className="post-date">
            <span className="text-xs text-gray-900">1 minute ago</span>
            <div className="caption text-sm">{postInfo.content}</div>
            {/* <div className="caption text-sm font-bold text-center">더보기</div> */}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card-footer p-4 pt-0">
      <div className="top">
        <div className="my-2 w-full flex flex-row justify-around">
          {postInfo.tags.map((tag) => {
            return (
              <div>
                <span className="font-bold text-sm" onClick={navigateToWalk}>
                  # {tag.name}
                </span>
                <span className="text-sm"> {tag.rate}% </span>
              </div>
            );
          })}
        </div>
        <div className="icons flex flex-row justify-center items-center">
          <div className="recommend mr-4">
            <img
              src="/images/emoji/recommend.png"
              className="_8-yf5"
              height={30}
              width={30}
              alt="감정이모지"
            />
            <div className="text-center p-1">0</div>
          </div>
          <div className="like mr-4">
            <img
              src="/images/emoji/like.png"
              className="_8-yf5"
              height={30}
              width={30}
              alt="감정이모지"
            />
            <div className="text-center p-1">0</div>
          </div>
          <div className="impressed mr-4">
            <img
              src="/images/emoji/impressed.png"
              className="_8-yf5"
              height={30}
              width={30}
              alt="감정이모지"
            />
            <div className="text-center p-1">2</div>
          </div>
          <div className="sad mr-4">
            <img
              src="/images/emoji/sad.png"
              className="_8-yf5"
              height={30}
              width={30}
              alt="감정이모지"
            />
            <div className="text-center p-1">0</div>
          </div>
          <div className="sad">
            <img
              src="/images/emoji/sad.png"
              className="_8-yf5"
              height={30}
              width={30}
              alt="감정이모지"
            />
            <div className="text-center p-1">0</div>
          </div>
        </div>

        <div className="caption text-sm">{postInfo.content}</div>
        <div className="post-date mt-1">
          <span className="text-xs text-gray-900">1 minute ago</span>
        </div>
      </div>
    </div>
  );
}

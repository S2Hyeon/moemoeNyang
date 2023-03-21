import React from "react";
import BoardFooter from "./board/BoardFooter";
import BoardHeader from "./board/BoardHeader";

export const PostCard = ({ onBottom = false }) => {
  return (
    <div
      className={`page-content pt-6 h-full mx-auto ${
        onBottom ? "max-w-[35vh]" : ""
      }`}
    >
      <div className="container flex px-1 h-full">
        <div className="feeds">
          <div className="feed-wrapper">
            <div className="feed-item border border-gray-400 rounded bg-white">
              <BoardHeader onBottom={onBottom} />
              <div className="feed-img">
                <img
                  className="aspect-square object-cover"
                  src="https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg"
                  alt="고양이게시물이미지"
                />
              </div>
              <BoardFooter onBottom={onBottom} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

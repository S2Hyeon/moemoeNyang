import React from "react";
import BoardFooter from "./board/BoardFooter";
import BoardHeader from "./board/BoardHeader";

export const PostCard = () => {
  return (
    <div className="page-content pt-6 h-full">
      <div className="container mx-auto flex px-1 h-full">
        <div className="feeds">
          <div className="feed-wrapper mb-4">
            <div className="feed-item border border-gray-400 rounded bg-white">
              <BoardHeader />
              <div className="feed-img">
                <img
                  className="aspect-square"
                  src="https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg"
                  alt="고양이게시물이미지"
                />
              </div>
              <BoardFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

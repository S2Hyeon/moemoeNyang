import React from "react";
import BoardFooter from "./board/BoardFooter";
import BoardHeader from "./board/BoardHeader";

export const PostCard = ({ onBottom = false }) => {
  return (
    <div>
      <div className="feed-item">
        <BoardHeader onBottom={onBottom} />
        <img
          className="aspect-square object-cover"
          src="https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg"
          alt="고양이게시물이미지"
        />
        <BoardFooter onBottom={onBottom} />
      </div>
    </div>
  );
};

import React from "react";
import BoardFooter from "./board/BoardFooter";
import BoardHeader from "./board/BoardHeader";

export const PostCard = ({ onBottom = false, postInfo }) => {
  return (
    <div>
      <div className="feed-item">
        <BoardHeader onBottom={onBottom} postInfo={postInfo} />
        <img
          className="aspect-square object-cover"
          src={postInfo.image}
          alt="고양이게시물이미지"
        />
        <BoardFooter onBottom={onBottom} postInfo={postInfo} />
      </div>
    </div>
  );
};

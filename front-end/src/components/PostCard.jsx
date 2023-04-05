import React, { useState } from "react";
import BoardFooter from "./board/BoardFooter";
import BoardHeader from "./board/BoardHeader";
import { useEffect } from "react";

export const PostCard = ({
  onBottom = false,
  postInfo,
  childChange,
  setChildChange,
}) => {
  const [emojiChange, setEmojiChange] = useState(false);

  useEffect(() => {
    setChildChange(!childChange);
  }, [emojiChange]);

  return (
    <div className="FeedItem">
      <BoardHeader onBottom={onBottom} postInfo={postInfo} />
      <div className={`flex-shrink-0 ${onBottom ? "h-[30vh]" : ""}`}>
        <img
          className={`aspect-square 
          object-cover h-[350px] w-full `}
          src={postInfo.image}
          alt="고양이게시물이미지"
        />
      </div>
      <BoardFooter
        onBottom={onBottom}
        postInfo={postInfo}
        emojiChange={emojiChange}
        setEmojiChange={setEmojiChange}
      />
    </div>
  );
};

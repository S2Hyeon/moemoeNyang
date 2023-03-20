import React from "react";
import BoardHeader from "./BoardHeader";
import BoardFooter from "./BoardFooter";

export default function Board() {
  return (
    <div>
      <BoardHeader />
      <img
        className="w-full aspect-square object-cover"
        src="https://cdn.salgoonews.com/news/photo/202202/15766_39019_2149.jpg"
        alt="고양이이미지"
      ></img>
      <BoardFooter />
    </div>
  );
}

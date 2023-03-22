import React from "react";
import BoardFlick from "../BoardFlick";
import TopFlick from "../TopFlick";

export default function BoardContent({ setTriggered, isHigh }) {
  return (
    <>
      <TopFlick setTriggered={setTriggered} />
      <div className={!isHigh && "hidden"}>
        <BoardFlick />
      </div>
    </>
  );
}

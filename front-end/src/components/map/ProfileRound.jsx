import React from "react";

export default function ProfileRound({ setTriggered }) {
  return (
    <div
      className={`rounded-full  h-12 w-12 p-[1.5px] ml-4 ${
        true ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" : ""
      }`}
      onClick={() => setTriggered(true)}
    >
      <div className="rounded-full bg-white wrapper overflow-hidden p-[1.5px] flex justify-center items-center">
        <div className="rounded-full bg-white wrapper overflow-hidden h-10 w-10">
          <img
            alt="nike's profile picture "
            className="_6q-tv h-full object-cover bg-black"
            data-testid="user-avatar"
            draggable="false"
            src="/images/kitten-510651.webp"
          />
        </div>
      </div>
    </div>
  );
}

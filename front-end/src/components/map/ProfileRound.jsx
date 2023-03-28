import React, { useEffect, useState } from "react";

export default function ProfileRound({
  setTriggered,
  image,
  catId,
  selectedCat,
}) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectedCat?.cat_id === catId) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedCat]);
  return (
    <div
      className={`rounded-full  h-12 w-12 p-[1.5px] ${
        selected
          ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          : ""
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
            // src="/images/kitten-510651.webp"
            src={image}
          />
        </div>
      </div>
    </div>
  );
}

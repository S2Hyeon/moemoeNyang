import React, { useEffect, useState } from "react";
import { typedUseSelector } from "../../store";

export default function BoardPin({ boardId, catImage }) {
  const selectedPostId = typedUseSelector((state) => state.map.selectedPostId);
  const [img, setImg] = useState(
    <img src="/images/map/pin.png" className="object-cover" />,
  );

  useEffect(() => {
    if (selectedPostId === boardId) {
      return setImg(
        <img src="/images/map/selected-pin.png" className="object-cover" />,
      );
    } else {
      setImg(<img src="/images/map/pin.png" className="object-cover" />);
    }
  }, [selectedPostId]);

  return (
    <div
      className={`w-[78px] h-[66px] ${
        selectedPostId === boardId ? "relative z-10" : ""
      }`}
    >
      {img}
      <img
        src={catImage}
        className="w-[37px] h-[37px] relative left-1/2 -top-[57%] translate-x-[-50%] translate-y-[-50%] rounded-[54px] object-cover"
      />
    </div>
  );

  // if (boardId === selectedPostId) {
  //   return <img src="/images/map/pin.png" className="object-cover" />;
  // } else {
  //   return <img src="/images/map/selected-pin.png" className="object-cover" />;
  // }
}

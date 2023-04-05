import React, { useEffect, useState } from "react";
import { typedUseSelector } from "../../store";

export default function BoardPin({ boardId }) {
  const selectedPostId = typedUseSelector((state) => state.map.selectedPostId);
  const [img, setImg] = useState(
    <img src="/images/map/pin.png" className="object-cover" />,
  );

  useEffect(() => {
    if (selectedPostId === boardId) {
      return setImg(
        <img
          src="/images/map/selected-pin.png"
          className="object-cover z-10"
        />,
      );
    } else {
      setImg(<img src="/images/map/pin.png" className="object-cover" />);
    }
  }, [selectedPostId]);

  return img;
  // if (boardId === selectedPostId) {
  //   return <img src="/images/map/pin.png" className="object-cover" />;
  // } else {
  //   return <img src="/images/map/selected-pin.png" className="object-cover" />;
  // }
}

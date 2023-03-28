import React, { useEffect, useState } from "react";
import { getMainPostList } from "../../../services/main";
import BoardFlick from "../BoardFlick";
import TopFlick from "../TopFlick";

export default function BoardContent({
  setTriggered,
  isHigh,
  catList,
  selectedCat,
  setSelectedCat,
  universityId,
}) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const catId = selectedCat ? selectedCat.cat_id : "";
    getMainPostList(universityId, "", catId).then((res) => {
      setPostList(res.data);
    });
  }, [selectedCat]);

  return (
    <>
      <TopFlick
        setTriggered={setTriggered}
        catList={catList}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <div className={isHigh ? "" : "hidden"}>
        <BoardFlick postList={postList} />
      </div>
    </>
  );
}

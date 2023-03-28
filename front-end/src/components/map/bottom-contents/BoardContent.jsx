import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMainPostList } from "../../../services/main";
import { typedUseSelector } from "../../../store";
import { setPostList } from "../../../store/mapSlice";
import BoardFlick from "../BoardFlick";
import TopFlick from "../TopFlick";

export default function BoardContent(
  {
    // setTriggered,
    // isHigh,
    // catList,
    // selectedCat,
    // setSelectedCat,
    // universityId,
  },
) {
  // const [postList, setPostList] = useState([]);
  const dispatch = useDispatch();
  const postList = typedUseSelector((state) => state.map.postList);
  const selectedCatId = typedUseSelector(
    (state) => state.map.selectedCat?.cat_id,
  );

  const { universityId } = typedUseSelector(
    (state) => state.member.memberObject,
  );

  const isHigh = typedUseSelector((state) => state.map.isBottomHigh);

  useEffect(() => {
    const args = [universityId, ""];
    if (selectedCatId) args.push(selectedCatId);
    getMainPostList(...args).then((res) => {
      dispatch(setPostList(res.data));
    });
  }, [selectedCatId]);

  return (
    <>
      <TopFlick
      // setTriggered={setTriggered}
      // catList={catList}
      // selectedCat={selectedCat}
      // setSelectedCat={setSelectedCat}
      />
      <div className={isHigh ? "" : "hidden"}>
        <BoardFlick />
      </div>
    </>
  );
}

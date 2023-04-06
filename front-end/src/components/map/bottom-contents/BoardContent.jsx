import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMainBoardList } from "../../../services/main";
import { typedUseSelector } from "../../../store";
import { setCatPositions, setPostList } from "../../../store/mapSlice";
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
    getMainBoardList(...args).then((res) => {
      const postList = res.data.content;
      dispatch(setPostList(postList));
      const positions = postList.map((e) => {
        return {
          boardId: e.board_id,
          catImage: e.cat.image,
          latlng: { lat: e.lat, lng: e.lng },
        };
      });
      dispatch(setCatPositions(positions));
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
        <div className="absolute top-[35vh] left-3 text-lg">{"<"}</div>
        <BoardFlick />
        <div className="absolute top-[35vh] right-3 text-lg">{">"}</div>
      </div>
    </>
  );
}

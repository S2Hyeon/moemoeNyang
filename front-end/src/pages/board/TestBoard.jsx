import React, { useEffect } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import TestImageUpload from "../../components/upload/TestImgUpload";
import { useState } from "react";
import { postBoard } from "../../services/baord";

export default function TestBoard() {
  const [data, setData] = useState({});

  function onPost(boardData) {
    console.log("onPost");
    console.log("data", boardData);
    for (const keyValue of boardData) console.log(keyValue);
    // postBoard(id, uid, lat, content, imgFile, lng);
    postBoard(boardData);
  }

  useEffect(() => {
    console.log("setData 완료");
    console.log("데이터 -> ", data);
  }, [data]);

  return (
    <div className="m-4">
      <Dropdown />
      <TestImageUpload data={data} setData={setData} />
      <div
        className="grid place-items-center w-full h-10 mt-4 mb-4 bg-lisa-200 rounded-xl"
        onClick={() => onPost(data)}
      >
        <span className="font-bold text-slate-500">게시물 등록</span>
      </div>
    </div>
  );
}

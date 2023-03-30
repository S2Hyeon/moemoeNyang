import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMainBoardList } from "../../services/main";
import { PostCard } from "../../components/PostCard";

export default function BoardHashTag() {
  const { tagName } = useParams();

  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    getMainBoardList(tagName).then((res) => setTagList(res.data.content));
  }, []);

  useEffect(() => {
    if (!tagList.length) return;
    console.log("tag list 불러오기");
    console.log(tagList);
  }, [tagList]);
  return (
    <div>
      <div className="flex justify-center text-center mt-4">
        <div className="text-xl font-bold"># {tagName}</div>
      </div>
      {tagList.map((data) => {
        return <PostCard postInfo={data} key={data.board_id} />;
      })}
    </div>
  );
}

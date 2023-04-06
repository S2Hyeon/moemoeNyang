import React, { useState, useEffect } from "react";
import { PostCard } from "../../components/PostCard";
import { getMainBoardList } from "../../services/main";

const MainPage = () => {
  const [postList, setPostList] = useState([]);
  const [childChange, setChildChange] = useState(false);

  useEffect(() => {
    getMainBoardList().then((res) => {
      setPostList(res.data.content);
    });
  }, []);

  useEffect(() => {
    getMainBoardList().then((res) => {
      setPostList(res.data.content);
    });
  }, [childChange]);

  useEffect(() => {
    if (!postList.length) return;
  }, [postList]);

  return (
    <div className="flex flex-col flex-wrap">
      {postList.map((data, index) => {
        return (
          <PostCard
            postInfo={data}
            key={"board" + data.board_id + "index" + index}
            childChange={childChange}
            setChildChange={setChildChange}
          />
        );
      })}
    </div>
  );
};

export default MainPage;

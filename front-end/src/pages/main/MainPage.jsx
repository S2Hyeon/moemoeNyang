import React, { useState, useEffect } from "react";
import { PostCard } from "../../components/PostCard";
import { getMainBoardList } from "../../services/main";

const MainPage = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getMainBoardList().then((res) => {
      setPostList(res.data.content);
    });
  }, []);

  useEffect(() => {
    if (!postList.length) return;
    console.log("post list 불러오기");
    console.log(postList);
  }, [postList]);

  return (
    <div className="flex flex-col flex-wrap">
      {postList.map((data) => {
        return <PostCard postInfo={data} />;
      })}
    </div>
  );
};

export default MainPage;

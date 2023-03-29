import React, { useState, useEffect } from "react";
import { PostCard } from "../../components/PostCard";
import { getMainPostList } from "../../services/main";

const MainPage = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getMainPostList().then((res) => setPostList(res.data));
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

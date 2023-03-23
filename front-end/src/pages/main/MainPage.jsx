import React from "react";
import { PostCard } from "../../components/PostCard";

const MainPage = () => {
  return (
    <div className="flex flex-wrap">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default MainPage;

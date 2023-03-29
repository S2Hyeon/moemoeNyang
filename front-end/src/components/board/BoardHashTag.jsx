import React from "react";
import { PostCard } from "../PostCard";

export default function BoardHashTag() {
  return (
    <>
      <div className="flex justify-center text-center mt-4">
        <div className="text-xl font-bold">#HashTag</div>
      </div>
      <PostCard />
    </>
  );
}

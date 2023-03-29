import React, { useEffect, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Panel from "../common/Panel";
import { PostCard } from "../PostCard";
import { typedUseSelector } from "../../store";

export default function BoardFlick() {
  const arr = Array.from({ length: 10 });
  const postList = typedUseSelector((state) => state.map.postList);
  const [selectedPost, setSelectedPost] = useState(postList[0]);

  return (
    <Flicking
      align="prev"
      circular={true}
      onWillChange={(e) => {
        setSelectedPost(postList[e.index]);
      }}
    >
      {postList &&
        postList.map((postInfo, i) => {
          return (
            <div className="w-full" key={postInfo.board_id}>
              <Panel>
                <div className="mx-auto w-4/5 ">
                  <div className="border rounded-md mt-2 h-[53vh]">
                    <PostCard onBottom={true} postInfo={postInfo} />
                  </div>
                </div>
              </Panel>
            </div>
          );
        })}
    </Flicking>
  );
}

import React, { useEffect, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Panel from "../common/Panel";
import { PostCard } from "../PostCard";
import { typedUseSelector } from "../../store";
import {
  setCenterPosition,
  setSelectedPost,
  setSelectedPostId,
} from "../../store/mapSlice";
import { useDispatch } from "react-redux";

export default function BoardFlick() {
  const arr = Array.from({ length: 10 });
  const dispatch = useDispatch();
  const postList = typedUseSelector((state) => {
    return state.map.postList;
  });

  const selectedPost = typedUseSelector((state) => state.map.selectedPost);
  useEffect(() => {
    dispatch(setSelectedPost(postList[0]));
  }, [postList]);

  const willChange = (e) => {
    const newPost = postList[e.index];
    const { lat, lng } = newPost;
    const newPosition = {
      lat: lat,
      lng,
    };
    dispatch(setSelectedPost(newPost));
    dispatch(setCenterPosition(newPosition));
  };

  if (!postList.length) return <></>;
  return (
    <Flicking align="prev" circular={true} onWillChange={willChange}>
      {postList.map((postInfo, i) => {
        return (
          <div className="w-full" key={postInfo.board_id +"index"+ i.toString()}>
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

import React, { useEffect, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Panel from "../common/Panel";
import { PostCard } from "../PostCard";
import { typedUseSelector } from "../../store";
import { setCenterPosition, setSelectedPostId } from "../../store/mapSlice";
import { useDispatch } from "react-redux";

export default function BoardFlick() {
  const arr = Array.from({ length: 10 });
  const dispatch = useDispatch();
  const postList = typedUseSelector((state) => {
    return state.map.postList;
  });

  const [selectedPost, setSelectedPost] = useState(() => postList[0]);

  useEffect(() => {
    if (!selectedPost) return;
    dispatch(setSelectedPostId(selectedPost.boardId));
  }, [selectedPost]);

  const willChange = (e) => {
    const newPost = postList[e.index];
    const { lat, lng } = newPost;
    const newPosition = {
      lat: lat,
      lng,
    };
    setSelectedPost(newPost);
    dispatch(setCenterPosition(newPosition));
  };

  return (
    <Flicking align="prev" circular={true} onWillChange={willChange}>
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

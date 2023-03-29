<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
import ReportModal from "../modal/ReportModal";
import { postFollow, deleteUnFollow } from "../../services/main";

export default function BoardHeader({ onBottom = false, postInfo }) {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

<<<<<<< HEAD
=======
  const [isFollowing, setIsFollowing] = useState(postInfo.cat.isFollowing);

  function onClickFollowBtn() {
    if (isFollowing) {
      console.log("delete UnFollow");
      deleteUnFollow(postInfo.cat.cat_id);
    } else {
      console.log("post Follow");
      postFollow(postInfo.cat.cat_id);
    }
    setIsFollowing(!isFollowing);
  }

  useEffect(() => {}, [postInfo.cat.isFollowing]);

>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
  if (onBottom) {
    return (
      <div className="header border-b p-2 flex justify-between items-center">
        <div className="left flex flex-row items-center">
          <div
            className={`rounded-full p-[1.5px] mr-4 ${
              true
                ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                : ""
            }`}
          >
            <div className="rounded-full bg-white wrapper overflow-hidden p-[1.5px] flex justify-center items-center">
              <div className="rounded-full bg-white wrapper overflow-hidden h-10 w-10">
                <img
                  alt="고양이프로필이미지"
                  className="_6q-tv h-full object-cover bg-black"
                  data-testid="user-avatar"
                  draggable="false"
                  src={postInfo.cat.image}
                />
              </div>
            </div>
          </div>
          <div className="user-name-and-place flex flex-col pt-1">
            <span className="text-lg font-bold">{postInfo.cat.name}</span>
          </div>
        </div>

        <div className="flex right">
          <div className="flex text-center align-baseline">
            <span className="text-sm">{postInfo.member.nickname}</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="header border-b p-2 flex justify-between items-center">
      <div className="left flex flex-row items-center">
        <div
          className={`rounded-full p-[1.5px] mr-4 ${
            true
              ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              : ""
          }`}
        >
          <div className="rounded-full bg-white wrapper overflow-hidden p-[1.5px] flex justify-center items-center">
            <div className="rounded-full bg-white wrapper overflow-hidden h-10 w-10">
              <img
                alt="고양이프로필이미지"
                className="_6q-tv h-full object-cover bg-black"
                data-testid="user-avatar"
                draggable="false"
                src={postInfo.cat.image}
              />
            </div>
          </div>
        </div>

        <div className="user-name-and-place flex flex-col">
          <span className="text-lg font-bold">{postInfo.cat.name}</span>
        </div>
      </div>

      <div className="flex right">
        <div className="flex mr-6 text-center align-baseline">
          {postInfo.cat.isFollowing === null ? (
            <img
<<<<<<< HEAD
=======
              onClick={onClickFollowBtn}
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
              className="w-7 h-7 mr-2"
              src="/images/button/Star.png"
              alt="즐겨찾기"
            />
          ) : (
            <img
<<<<<<< HEAD
=======
              onClick={onClickFollowBtn}
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
              className="w-7 h-7 mr-2"
              src="/images/button/FillStar.png"
              alt="즐겨찾기"
            />
          )}

          <span className="text-lg">{postInfo.member.nickname}</span>
        </div>
        <div className="text-xl mr-2" onClick={showModal}>
          🚨
        </div>
        {modalOpen && <ReportModal setModalOpen={setModalOpen} />}
      </div>
    </div>
  );
}

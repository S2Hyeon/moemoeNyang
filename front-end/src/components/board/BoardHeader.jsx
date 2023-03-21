import React, { useState } from "react";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import ReportModal from "../modal/ReportModal";

export default function BoardHeader() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="header border-b p-2 flex justify-between items-center">
      <div className="left flex flex-row items-center">
        <div
          class={`rounded-full p-[1.5px] mr-4 ${
            true
              ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              : ""
          }`}
        >
          <div class="rounded-full bg-white wrapper overflow-hidden p-[1.5px] flex justify-center items-center">
            <div class="rounded-full bg-white wrapper overflow-hidden h-10 w-10">
              <img
                alt="고양이프로필이미지"
                className="_6q-tv h-full object-cover bg-black"
                data-testid="user-avatar"
                draggable="false"
                src="/images/kitten-510651.webp"
              />
            </div>
          </div>
        </div>

        <div className="user-name-and-place flex flex-col">
          <span className="text-lg font-bold">냥냥이</span>
        </div>
      </div>

      <div className="flex right">
        <div className="flex mr-6 text-center align-baseline">
          <AiFillStar className="text-3xl mr-1 text-yellow-400" />
          <span className="text-lg">냥집사</span>
        </div>
        <div className="text-xl" onClick={showModal}>
          🚨
        </div>
        {modalOpen && <ReportModal setModalOpen={setModalOpen} />}
      </div>
    </div>
  );
}

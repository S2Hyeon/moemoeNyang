import React, { useState } from "react";
import * as S from "./ModalStyle";

export default function ReportModal({ setModalOpen }) {
  const [openHashTag, setOpenHashTag] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <S.Modal>
      <div className="font-bold text-2xl mb-2">🚨 신고하기 🚨</div>
      <hr className="mr-4 ml-4 mt-2 mb-4"></hr>
      <div className="text-lg mb-6">부적절한 콘텐츠입니다.</div>
      <div className="text-lg mb-6">부적절한 닉네임입니다.</div>
      <div className="text-lg mb-6">고양이 이름이 잘못되었습니다.</div>
      <div
        className="text-lg mb-6"
        onClick={() => setOpenHashTag(!openHashTag)}
      >
        캡션이 잘못되었습니다.
      </div>
      {openHashTag && <div>해시태그 리스트</div>}
      <div className="grid place-items-center">
        <div
          className="grid place-items-center bg-lisa-300 w-20 h-8 rounded-lg "
          onClick={closeModal}
        >
          취소
        </div>
      </div>
    </S.Modal>
  );
}

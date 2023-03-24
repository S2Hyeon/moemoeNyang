import React, { useState } from "react";
import Input from "../common/Input";
import * as S from "./ModalStyle";

export default function UnivSearchModal({ setModalOpen, setUniversity }) {
  const [seleted, setSelected] = useState(null);

  const closeModal = () => {
    setModalOpen(false);
  };
  const onSubmit = () => {
    setUniversity(seleted);
    closeModal();
  };

  return (
    <S.Modal className="border">
      <div className="Container h-full flex flex-col">
        <div className="ModalHeader top-0 sticky">
          {/* <div className="font-bold text-2xl mb-2">🔍 학교 검색 🔍</div> */}
          <Input placeholder="학교 이름" className="text-center" />
          <hr className="mr-4 ml-4 mt-2 mb-4"></hr>
        </div>
        <div className="ModalBody overflow-scroll">
          <div className="text-lg mb-6">부적절한 콘텐츠입니다.</div>
          <div className="text-lg mb-6">부적절한 닉네임입니다.</div>
          <div className="text-lg mb-6">고양이 이름이 잘못되었습니다.</div>{" "}
          <div className="text-lg mb-6">부적절한 콘텐츠입니다.</div>
          <div className="text-lg mb-6">부적절한 닉네임입니다.</div>
          <div className="text-lg mb-6">고양이 이름이 잘못되었습니다.</div>{" "}
          <div className="text-lg mb-6">부적절한 콘텐츠입니다.</div>
          <div className="text-lg mb-6">부적절한 닉네임입니다.</div>
          <div className="text-lg mb-6">고양이 이름이 잘못되었습니다.</div>{" "}
          <div className="text-lg mb-6">부적절한 콘텐츠입니다.</div>
          <div className="text-lg mb-6">부적절한 닉네임입니다.</div>
          <div className="text-lg mb-6">고양이 이름이 잘못되었습니다.</div>
        </div>
        <div className="ModalFooter sticky bottom-0">
          <div className="pt-3 pb-2 h-9">
            {seleted ? seleted : "선택된 학교가 없습니다."}
          </div>
          <div className="flex justify-center align-bottom gap-4">
            <div
              className="grid place-items-center bg-lisa-300 w-20 h-8 rounded-lg"
              onClick={onSubmit}
              role="button"
            >
              적용
            </div>
            <div
              className="grid place-items-center bg-slate-200 w-20 h-8 rounded-lg "
              onClick={closeModal}
              role="button"
            >
              취소
            </div>
          </div>
        </div>
      </div>
    </S.Modal>
  );
}

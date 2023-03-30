import React from "react";
import * as S from "./ModalStyle";

export default function Symptomatic({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <S.Modal>
      <img
        className="w-32 h-32 m-auto"
        src="https://cdn.imweb.me/upload/S2019062402ab744db74bb/385b3cb734eda.png"
        alt="고양이피부병이미지"
      />
      <div className="mt-4">
        <div className="mb-2">
          <span className="font-bold">질병명 : </span>
          <span>피부사상균</span>
        </div>
        <div>
          <div className="font-bold mb-2">질병 설명</div>
          <div>
            곰팡이성 피부염인 고양이 링웜. 사람에게도 전염되기 때문에 걱정하는
            사람들이 많다. 면역력이 떨어져 있는 고양이나. 평소 외부 외출을 하는
            고양이들. 또는 열악하고 비위생적인 환경에서 감염될 가능성이 높다
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="grid place-items-center bg-lisa-300 font-bold text-slate-400 w-1/2 h-7 rounded-lg m-2">
          등 록
        </div>
        <div
          className="grid place-items-center bg-slate-200 font-bold text-slate-400 w-1/2 h-7 rounded-lg m-2"
          onClick={closeModal}
        >
          취 소
        </div>
      </div>
    </S.Modal>
  );
}

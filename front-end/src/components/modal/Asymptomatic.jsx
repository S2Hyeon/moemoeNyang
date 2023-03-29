import React from "react";
import NotFoundLottie from "./../../components/lottie/NotFoundLottie";
import * as S from "./ModalStyle";

import { useNavigate } from "react-router-dom";

export default function Asymptomatic({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };
  const navigate = useNavigate();

  const navigateToHospitalList = () => {
    navigate("/map/hospital");
  };

  return (
    <S.Modal>
      <NotFoundLottie />
      <div className="text-sm mb-2">발견된 질병이 없어요</div>
      <div className="text-sm mb-4">
        질환이 의심되는 경우 근처 병원을 방문해보세요
      </div>
      <div className="flex">
        <div
          onClick={navigateToHospitalList}
          className="grid place-items-center bg-lisa-300 font-bold text-slate-400 w-1/2 h-7 rounded-lg m-2"
        >
          병원리스트
        </div>
        <div
          className="grid place-items-center bg-slate-200 font-bold text-slate-400 w-1/2 h-7 rounded-lg m-2"
          onClick={closeModal}
        >
          확 인
        </div>
      </div>
    </S.Modal>
  );
}

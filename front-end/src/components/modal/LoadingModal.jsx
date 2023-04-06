import React from "react";
import * as S from "./ModalStyle";

import { useNavigate } from "react-router-dom";
import LoadingLottie from "../lottie/LoadingCatLottie";

export default function LoadingModal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };
  const navigate = useNavigate();

  const navigateToHospitalList = () => {
    navigate("/map/hospital");
  };

  return (
    <S.Modal>
      <LoadingLottie />
      <div className="text-sm font-bold mb-4">잠시만 기다려주세요</div>
      <div className="text-sm mb-2">인공지능이 질병을 분석중이에요</div>
      {/* <div className="flex justify-center">
        <div
          className="grid place-items-center bg-slate-200 font-bold text-slate-400 w-1/2 h-7 rounded-lg m-2"
          onClick={closeModal}
        >
          취 소
        </div>
      </div> */}
    </S.Modal>
  );
}

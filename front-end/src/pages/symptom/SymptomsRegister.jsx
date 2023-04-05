import React, { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Asymptomatic from "../../components/modal/Asymptomatic";
import ImgUpload from "../../components/upload/ImgUpload";
import { postDisease } from "../../services/symptom"
import { AlertSuccess } from "../../utils/alertToastify";

export default function SymptomsRegister() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 이미지 업로드 함수
  const [image, setImage] = useState("");

  const handleImageUpload = (uploadedImage) => {
    setImage(uploadedImage);
  };

  // 질병 등록 이벤트 핸들러
  const onSubmit = (catId, disease_id, image) => {
    postDisease(catId, disease_id, image).then((res) => {
      // console.log(res);
      AlertSuccess("질병을 등록하였습니다.");
      setModalOpen(true);
    });
  };

  return (
    <div className="m-4">
      <Dropdown />
      <ImgUpload onImageUpload={handleImageUpload} />
      <div
        className="grid place-items-center w-full h-10 mt-4 mb-4 bg-lisa-200 rounded-xl"
        onClick={onSubmit}
      >
        <span className="font-bold text-slate-500">질 병 분 석</span>
      </div>
      {modalOpen && <Asymptomatic setModalOpen={setModalOpen} />}
    </div>
  );
}

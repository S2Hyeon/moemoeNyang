import React, { useEffect, useState } from "react";
import * as S from "./ModalStyle";
import { postDisease } from "../../services/symptom";
import { AlertSuccess } from "../../utils/alertToastify";
import { useNavigate } from "react-router-dom";

export default function Symptomatic({ setModalOpen, data, jsonRes, catId }) {
  const navigate = useNavigate();
  const closeModal = () => {
    setModalOpen(false);
  };
  const [imageUrl, setImageUrl] = useState("");
  const [diseaseId, setDiseaseId] = useState(6);
  const [image, setImage] = useState(null);
  const { disease_id, name, explanation } = data;
  const [cl, accuracy, imageBase64] = JSON.parse(jsonRes).predictions;

  useEffect(() => {
    if (imageBase64) {
      setImageUrl("data:image/png;base64," + imageBase64);
      const imageFile = createImageFile(imageBase64);
      setImage(imageFile);
      setDiseaseId(data.disease_id);
    }
  }, [imageBase64]);

  const onSubmitHandler = () => {
    if (!image || !diseaseId) return;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("diseaseId", diseaseId);
    postDisease(catId, formData).then((res) => {
      AlertSuccess("질병이 등록되었습니다");
      navigate(`/cats/${catId}/diseases`);
    });
  };

  function createImageFile(base64String) {
    const byteCharacters = atob(base64String); // base64 문자열을 디코딩하여 바이너리 데이터 생성
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" }); // Blob 객체 생성
    const file = new File([blob], "image.png", { type: "image/png" }); // File 객체 생성

    return file;
  }

  return (
    <S.Modal>
      {/* <div className="w-full h-8 pt-8"> */}
      <img
        className="object-none max-h-48"
        src={imageUrl}
        alt="고양이피부병이미지"
      />
      {/* </div> */}
      <div className="mt-4">
        <div className="mb-2">
          <span className="font-bold">질병명 : </span>
          <span>{name}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold">AI 일치율 : </span>
          <span>{(accuracy * 100).toFixed(2) + "%"}</span>
        </div>
        <div>
          <div className="font-bold mb-2">질병 설명</div>
          <div>{explanation}</div>
        </div>
      </div>

      <div className="flex">
        <div
          className="grid place-items-center bg-lisa-300 font-bold text-slate-400 w-1/2 h-7 rounded-lg m-2"
          onClick={onSubmitHandler}
        >
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

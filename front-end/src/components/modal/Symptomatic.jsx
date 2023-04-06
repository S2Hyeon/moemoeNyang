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
  const [image, setImage] = useState(null);
  const { disease_id, name, explanation } = data;
  const [cl, accuracy, imageBase64] = JSON.parse(jsonRes).predictions;

  useEffect(() => {
    if (imageBase64) {
      const binaryString = atob(imageBase64);
      setImageUrl("data:image/png;base64," + imageBase64);
      const blob = new Blob([binaryString], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      // setImageUrl(url);
      setImage(blob);
    }
  }, [imageBase64]);

  // useEffect(() => {
  //   if (!image) return;
  //   const url = URL.createObjectURL(image);
  //   console.log(url);
  //   // setImageUrl(url);
  // }, [image]);

  const onSubmitHandler = () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image, "image.png");
    formData.append("disease_id", disease_id);
    postDisease(catId, formData).then((res) => {
      AlertSuccess("질병이 등록되었습니다");
      navigate(`/cats/${catId}/diseases`);
    });
  };

  return (
    <S.Modal>
      <img
        className="w-full h-full m-auto"
        src={imageUrl}
        alt="고양이피부병이미지"
      />
      <div className="mt-4">
        <div className="mb-2">
          <span className="font-bold">질병명 : </span>
          <span>{name}</span>
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

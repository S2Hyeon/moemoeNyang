import React, { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Asymptomatic from "../../components/modal/Asymptomatic";
import ImgUpload from "../../components/upload/ImgUpload";
import { postDisease, postDiseaseRes } from "../../services/symptom";
import { AlertSuccess } from "../../utils/alertToastify";

export default function SymptomsRegister() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 이미지 업로드 함수
  const [image, setImage] = useState("");
  const [catId, setCatId] = useState("");
  useEffect(() => {
    if (!image) return;
    const imageFormdata = new FormData();
    imageFormdata.append("image", image);
    postDiseaseRes(imageFormdata).then((res) => {
      alert(res);
    });
  }, [image]);

  // 질병 등록 이벤트 핸들러
  // 질병분석 API 나오면 아래에 주석처리된 부분 지우면 될듯.
  const onSubmit = () => {
    let disease_id = 2;

    // disease_id = res.data.disease_detail_resp.disease_id
    // postDisease(catId, disease_id, image).then((res) => {
    //   console.log(res);
    //   AlertSuccess("질병을 등록하였습니다.");
    //   setModalOpen(true);
    // });
  };

  return (
    <div className="m-4">
      <Dropdown setCatId={setCatId} />
      <ImgUpload setImage={setImage} />
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

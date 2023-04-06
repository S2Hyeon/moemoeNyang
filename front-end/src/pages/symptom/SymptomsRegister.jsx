import React, { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Asymptomatic from "../../components/modal/Asymptomatic";
import ImgUpload from "../../components/upload/ImgUpload";
import { postDisease, postDiseaseRes } from "../../services/symptom";
import { AlertSuccess, AlertWarning } from "../../utils/alertToastify";
import Symptomatic from "../../components/modal/Symptomatic";
import LoadingModal from "../../components/modal/LoadingModal";

export default function SymptomsRegister() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 이미지 업로드 함수
  const [image, setImage] = useState("");
  const [catId, setCatId] = useState("");
  const [modal, setModal] = useState(() => {
    // return <Asymptomatic setModalOpen={setModalOpen} />;
    // return <Symptomatic setModalOpen={setModalOpen} />;
    return <LoadingModal setModalOpen={setModalOpen} />;
  });

  useEffect(() => {
    if (!modalOpen) {
      return setModal(<LoadingModal setModalOpen={setModalOpen} />);
    }
  }, [modalOpen]);
  // useEffect(() => {
  //   if (!image) return;
  //   const imageFormdata = new FormData();
  //   imageFormdata.append("image", image);
  //   setModalOpen(true);
  //   postDiseaseRes(imageFormdata).then((res) => {
  //     alert(res);
  //   });
  // }, [image]);

  const onSubmitHandler = () => {
    if (!image) return AlertWarning("이미지가 없습니다");
    const imageFormdata = new FormData();
    imageFormdata.append("image", image);
    setModalOpen(true);
    postDiseaseRes(imageFormdata).then((res) => {
      setModal(
        <Symptomatic
          setModalOpen={setModalOpen}
          data={res.data.disease_detail_resp}
          jsonRes={res.data.json_response}
          catId={catId}
        />,
      );
      alert(res);
    });
  };

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
        onClick={onSubmitHandler}
      >
        <span className="font-bold text-slate-500">질 병 분 석 시 작</span>
      </div>
      {modalOpen && modal}
    </div>
  );
}

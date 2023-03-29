import React, { useState } from "react";
<<<<<<< HEAD

export default function ModifyUserInfo() {
  const [userNickname, setUserNickName] = useState("");
  const [userUniversity, setUserUniversity] = useState("");

  function onNickNameChange(e) {
    setUserNickName(e.target.value);
  }

  return (
    <div className="grid content-center p-2 h-screen w-[350px] ml-2 mr-2.5">
=======
import { postUserInfo } from "../../services/mypage";
import UnivSearchModal from "../../components/modal/UnivSearchModal";
import { useNavigate } from "react-router-dom";

export default function ModifyUserInfo() {
  const [userNickname, setNickName] = useState(null);
  const [password, setPassword] = useState(null);

  function onNickNameChange(e) {
    console.log("닉네임", e.target.value);
    setNickName(e.target.value);
  }
  function onPasswordChange(e) {
    console.log("비밀번호", e.target.value);
    setPassword(e.target.value);
  }

  //대학코드, 대학 모달창
  const [university, setUniversity] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  const navigate = useNavigate();

  const navigateToMypage = () => {
    navigate("/mypage");
  };

  function onSubmit() {
    if (userNickname === null || password === null || university === null) {
      alert("정보를 수정해주세요.");
      return;
    } else {
      postUserInfo(userNickname, university, password);
      navigateToMypage();
      console.log("수정완료");
    }
  }

  return (
    <div className="grid content-center p-2 h-[720px] w-[350px] ml-2 mr-2.5">
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
      <div className="font-extrabold text-center text-3xl mb-10 text-slate-500">
        회원 정보 수정
      </div>
      <div className="mb-4">
        <input
          onKeyUpCapture={onNickNameChange}
          type="text"
          className="w-full rounded border px-2 py-2 focus:outline-none active:outline-none bg-[#FCFDFD] border-gray-300  undefined"
          placeholder="닉네임"
        />
      </div>
<<<<<<< HEAD
      <div className="flex mb-6">
        <input
          type="text"
          className="w-4/5 rounded border px-2 py-2 focus:outline-none active:outline-none bg-[#FCFDFD] border-gray-300  undefined"
          placeholder="학교명"
        />
        <div className="w-1/5 ml-1 h-full rounded-[5px] bg-[#ffe5e5] flex justify-center items-center border border-slate-100 font-bold text-slate-500">
          검색
        </div>
      </div>
      <div className="w-full h-10 rounded-[5px] bg-[#ffe5e5] flex justify-center items-center border border-slate-100 font-bold text-slate-500">
=======
      <div className="flex mb-4">
        <input
          autoFocus={true}
          className="w-4/5 rounded border px-2 py-2 focus:outline-none active:outline-none bg-[#FCFDFD] border-gray-300  undefined"
          placeholder="소속학교"
          type="text"
          value={university ? university.name : ""}
          disabled={true}
        />
        <div
          onClick={showModal}
          className="w-1/5 ml-1 h-full rounded-[5px] bg-[#ffe5e5] flex justify-center items-center border border-slate-100 font-bold text-slate-500"
        >
          검색
        </div>
        <div id="소속학교 선택 컨테이너" className="flex gap-[5px]">
          {modalOpen && (
            <UnivSearchModal
              setModalOpen={setModalOpen}
              setUniversity={setUniversity}
            />
          )}
        </div>
      </div>
      <input
        onKeyUpCapture={onPasswordChange}
        type="password"
        className="w-full rounded border mb-4 px-2 py-2 focus:outline-none active:outline-none bg-[#FCFDFD] border-gray-300  undefined"
        placeholder="비밀번호"
      />
      <div
        onClick={onSubmit}
        className="w-full h-10 rounded-[5px] bg-[#ffe5e5] flex justify-center items-center border border-slate-100 font-bold text-slate-500"
      >
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
        수정
      </div>
    </div>
  );
}

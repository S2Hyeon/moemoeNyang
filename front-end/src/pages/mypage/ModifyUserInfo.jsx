import React, { useState } from "react";

export default function ModifyUserInfo() {
  const [userNickname, setUserNickName] = useState("");
  const [userUniversity, setUserUniversity] = useState("");

  function onNickNameChange(e) {
    setUserNickName(e.target.value);
  }

  return (
    <div className="grid content-center p-2 h-screen w-[350px] ml-2 mr-2.5">
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
        수정
      </div>
    </div>
  );
}

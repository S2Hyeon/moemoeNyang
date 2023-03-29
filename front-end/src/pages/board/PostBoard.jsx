import React from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import ImgUpload from "../../components/upload/ImgUpload";

export default function PostBoard() {
  return (
    <div className="m-4">
      <Dropdown />
      <ImgUpload />
      <div className="grid place-items-center w-full h-10 mt-4 mb-4 bg-lisa-200 rounded-xl">
<<<<<<< HEAD
        <span className="font-bold text-slate-500">분 석</span>
=======
        <span className="font-bold text-slate-500">행 동 분 석</span>
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import ImgUpload from "../../components/upload/ImgUpload";

export default function PostBoard() {
  const [formData, setFormData] = useState(new FormData());

  function onContentChange(e) {
    console.log("content", e.target.value);
    // setContent(e.target.value);
  }
  return (
    <div className="m-4">
      <Dropdown formData={formData} setFormData={setFormData} />
      <ImgUpload formData={formData} setFormData={setFormData} />
      <textarea
        className="w-full h-[130px] mt-4 p-4 focus:outline-lisa-300"
        placeholder="게시물 내용을 작성해주세요."
        onKeyUpCapture={onContentChange}
      ></textarea>
      <div className="grid place-items-center w-full h-10 mt-4 mb-4 bg-lisa-200 rounded-xl">
        <span className="font-bold text-slate-500">등 록</span>
      </div>
    </div>
  );
}

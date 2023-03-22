import React, { useState, useRef } from "react";
import { AiFillCamera } from "@react-icons/all-files/ai/AiFillCamera";

export default function ImageUpload() {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <form className="mt-4 ">
      <label className="imgUpload" htmlFor="imgUploadInput">
        {imgFile === "" ? (
          <div className="flex justify-center items-center w-full h-80 rounded-xl bg-slate-200">
            <AiFillCamera className="w-14 h-14 text-slate-400" />
          </div>
        ) : (
          <img
            className="w-full h-full object-cover rounded-xl"
            src={imgFile}
            alt="이미지"
          />
        )}
      </label>
      <input
        className="hidden"
        type="file"
        accept="image/*"
        id="imgUploadInput"
        onChange={saveImgFile}
        ref={imgRef}
      />
    </form>
  );
}

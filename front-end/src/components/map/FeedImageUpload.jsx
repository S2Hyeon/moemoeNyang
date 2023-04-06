import React, { useState, useRef } from "react";
import { AiFillCamera } from "@react-icons/all-files/ai/AiFillCamera";

export default function FeedImageUpload({ setImage }) {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  // const formData = new FormData();

  // 이미지 업로드 input의 onChange
  const saveImgFile = (e) => {
    if(!e.target.files[0]) return; //이미지 업로드를 취소하면 반환
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
      console.log("image upload", e.target.files[0]);
      setImage(e.target.files[0])
      // formData.append("catId", 2);
      // formData.append("universityId", 1);
      // formData.append("lng", 36.234);
      // formData.append("content", "컨텐트내용");
      // formData.append("image", e.target.files[0]);
      // formData.append("lat", 12.123);
      // for (const keyValue of formData) console.log(keyValue);
      // setData(formData);
    };
  };

  return (
    <form className="w-full h-full" encType="multipart/form-data">
      <label className="imgUpload" htmlFor="imgUploadInput">
        {imgFile === "" ? (
          <div className="flex justify-center items-center w-full h-full rounded-xl bg-slate-200">
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

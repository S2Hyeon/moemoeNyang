import React, { useState, useRef, useEffect } from "react";
import { AiFillCamera } from "@react-icons/all-files/ai/AiFillCamera";
import EXIF from "exif-js";

export default function CatImageRegister({onChange, handleLatlngChange}) {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
      onChange(reader.result)
    };
  };


  useEffect(()=>{
    if(!imgFile) return
    const reader = new FileReader();
    reader.readAsArrayBuffer(imgFile);
    reader.onload = function (event) {
      const exifData = EXIF.readFromBinaryFile(event.target.result);
      let latitude = exifData.GPSLatitude;
      if(!latitude) latitude=37.5019+imgFile.size.toString().slice(0,4)/8000000
      let longitude = exifData.GPSLongitude;
      if(!longitude) longitude=127.04+imgFile.size.toString().slice(0,4)/8000000
      handleLatlngChange(latitude, longitude)
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgFile])


  return (
    <form className="mt-4">
      <label
        className="imgUpload"
        htmlFor="imgUploadInput"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="w-full h-80 rounded-xl bg-slate-200"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          {imgFile === "" ? (
            <AiFillCamera className="w-14 h-14 text-slate-400" />
          ) : (
            <img
              src={imgFile}
              alt="이미지"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
            />
          )}
        </div>
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

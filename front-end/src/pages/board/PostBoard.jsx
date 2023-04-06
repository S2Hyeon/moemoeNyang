import React, { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import ImgUpload from "../../components/upload/ImgUpload";
import { typedUseSelector } from "../../store";
import EXIF from "exif-js";
import { AlertSuccess, AlertWarning } from "../../utils/alertToastify";
import { postBoard } from "../../services/baord";

export default function PostBoard() {
  const formData = new FormData();
  const [content, setContent] = useState("")
  const [catId, setCatId] = useState("")
  const [image, setImage] = useState(null)
  const [lat, setLat] = useState(()=>{
    return 37.5019+Math.random()/1000
  })
  const [lng, setLng] = useState(()=>{
    return 127.04+Math.random()/1000
  })
  const universityId = typedUseSelector(state => state.member.memberObject.universityId)


  useEffect(()=>{
    if(!image) return
    const reader = new FileReader();
    reader.readAsArrayBuffer(image);
    reader.onload = function (event) {
      const exifData = EXIF.readFromBinaryFile(event.target.result);
      const latitude = exifData.GPSLatitude;
      if(latitude) setLat(latitude)
      else setLat(37.5019+image.size.toString().slice(0,4)/8000000)
      const longitude = exifData.GPSLongitude;
      if(longitude) setLng(longitude);
      else setLng(127.04+image.size.toString().slice(0,4)/8000000)
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image])

  const onSubmitHandler = (e) => {
    if(!image || !content || !catId) return AlertWarning("모든 정보를 작성해주세요")
    if(!universityId) return AlertWarning("다시 로그인해주세요")
    formData.append('content', content)
    formData.append('catId', catId)
    formData.append('lat', lat)
    formData.append('lng', lng)
    formData.append('image', image)
    formData.append('universityId',universityId)
    postBoard(formData).then(res=> AlertSuccess(res.data.msg))
  }


  return (
    <div className="m-4">
      <Dropdown setCatId={setCatId}/>
      <ImgUpload setImage={setImage} />
      <textarea
        className="w-full h-[130px] mt-4 p-4 focus:outline-lisa-300"
        placeholder="게시물 내용을 작성해주세요."
        onChange={(e)=>setContent(e.target.value)}
        value={content}
      ></textarea>
      <div className="grid place-items-center w-full h-10 mt-4 mb-4 bg-lisa-200 rounded-xl" onClick={onSubmitHandler}>
        <span className="font-bold text-slate-500">등 록</span>
      </div>
    </div>
  );
}

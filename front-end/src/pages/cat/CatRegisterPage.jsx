import React, { useEffect, useState } from "react";
import CatImageRegister from "../../components/cat/CatImageRegister";
import CatNameButton from "../../components/cat/CatNameButton";
import CatGenderButton from "../../components/cat/CatGenderButton";
import CatAgeButton from "../../components/cat/CatAgeButton";
import CatRegisterButton from "../../components/cat/CatRegisterButton";
import { useNavigate } from "react-router-dom";
import EXIF from "exif-js";
import FeedImageUpload from "../../components/map/FeedImageUpload";

export default function CatRegisterPage() {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [image, setImage] = useState(null)
  const [age, setAge] = useState(3)
  const [lat, setLat] = useState(()=>{
    return 37.5019+Math.random()/1000
  })
  const [lng, setLng] = useState(()=>{
    return 127.04+Math.random()/1000
  })
  const navigate = useNavigate()

  const handleLatlngChange = (lat, lng) => {
    setLat(lat)
    setLng(lng)
  }


  // const [catData, setCatData] = useState({
  //   image: null,
  //   name: "",
  //   gender: "",
  //   age: "",
  //   lat: "",
  //   lng: "",
  // });

  // const handleImageChange = (image) => {
  //   setCatData({ ...catData, image });
  // };

  // const handleLatlngChange = (lat, lng) => {
  //   setCatData({ ...catData, lat, lng })
  // }

  // const handleNameChange = (name) => {
  //   setCatData({ ...catData, name });
  // };

  // const handleGenderChange = (gender) => {
  //   setCatData({ ...catData, gender });
  //   console.log("최상단 젠더", gender)
  // };

  // const handleAgeChange = (age) => {
  //   setCatData({ ...catData, age });
  // };

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

  return (
    <div className="flex justify-center items-center">
      <div className="w-auto grid gap-4 py-4">
        {/* <CatImageRegister onChange={setImage} handleLatlngChange={handleLatlngChange} /> */}
        <FeedImageUpload setImage={setImage}></FeedImageUpload>
        <div className="grid place-items-center w-full mt-4 mb-4 ">
          <CatNameButton onChange={setName} />
          <CatGenderButton onChange={setGender} />
          <CatAgeButton onChange={setAge} />
          <CatRegisterButton catData={{name , age, gender, image, lat, lng}} />
        </div>
      </div>
    </div>
  );
}

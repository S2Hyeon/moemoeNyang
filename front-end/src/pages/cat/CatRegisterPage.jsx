import React, { useState } from "react";
import CatImageRegister from "../../components/cat/CatImageRegister";
import CatNameButton from "../../components/cat/CatNameButton";
import CatGenderButton from "../../components/cat/CatGenderButton";
import CatAgeButton from "../../components/cat/CatAgeButton";
import CatRegisterButton from "../../components/cat/CatRegisterButton";

export default function CatRegisterPage() {
    
  const [catData, setCatData] = useState({
    image: null,
    name: "",
    gender: "",
    age: "",
  });

  const handleImageChange = (image) => {
    setCatData({ ...catData, image });
  };

  const handleNameChange = (name) => {
    setCatData({ ...catData, name });
  };

  const handleGenderChange = (gender) => {
    setCatData({ ...catData, gender });
    console.log("최상단 젠더", gender)
  };

  const handleAgeChange = (age) => {
    setCatData({ ...catData, age });
  };


  return (
    <div className="flex justify-center items-center">
      <div className="w-auto grid gap-4 py-4">
        <CatImageRegister onChange={handleImageChange} />
        <div className="grid place-items-center w-full mt-4 mb-4 ">
          <CatNameButton onChange={handleNameChange} />
          <CatGenderButton onChange={handleGenderChange} />
          <CatAgeButton onChange={handleAgeChange} />
          <CatRegisterButton catData={catData} />
        </div>
      </div>
    </div>
  );
}

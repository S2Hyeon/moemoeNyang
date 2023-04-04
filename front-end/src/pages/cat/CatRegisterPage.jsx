import React, { useState } from "react";
import CatImageRegister from "../../components/cat/CatImageRegister";
import CatNameButton from "../../components/cat/CatNameButton";
import CatGenderButton from "../../components/cat/CatGenderButton";
import CatAgeButton from "../../components/cat/CatAgeButton";
import CatRegisterButton from "../../components/cat/CatRegisterButton";

export default function CatRegisterPage() {
  const [catImage, setCatImage] = useState("");
  const [catName, setCatName] = useState("");
  const [catGender, setCatGender] = useState("");
  const [catAge, setCatAge] = useState("");

  const handleCatImageChange = (image) => {
    setCatImage(image);
  };

  const handleCatNameChange = (name) => {
    setCatName(name);
  };

  const handleCatGenderChange = (gender) => {
    setCatGender(gender);
  };

  const handleCatAgeChange = (age) => {
    setCatAge(age);
  };

  const handleCatRegister = () => {
    // Send data to server
    console.log("Cat data:", catImage, catName, catGender, catAge);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-auto grid gap-4 py-4">
        <CatImageRegister onChange={handleCatImageChange} />
        <div className="grid place-items-center w-full mt-4 mb-4 ">
          <CatNameButton onChange={handleCatNameChange} />
          <CatGenderButton onChange={handleCatGenderChange} />
          <CatAgeButton onChange={handleCatAgeChange} />
          <CatRegisterButton onClick={handleCatRegister} />
        </div>
      </div>
    </div>
  );
}

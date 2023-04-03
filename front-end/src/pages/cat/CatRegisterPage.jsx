import React from "react"
import CatImageRegister from "../../components/cat/CatImageRegister";
import CatNameButton from "../../components/cat/CatNameButton";
import CatGenderButton from "../../components/cat/CatGenderButton";
import CatAgeButton from "../../components/cat/CatAgeButton";
import CatRegisterButton from "../../components/cat/CatRegisterButton";
// import ImgUpload from "../../components/upload/ImgUpload";


export default function CatRegisterPage() {


    return(
        <div className="flex justify-center items-center">
            <div className="w-auto grid gap-4 py-4">
                {/* <ImgUpload /> */}
                <CatImageRegister />
                <div className="grid place-items-center w-full mt-4 mb-4 ">
                    <CatNameButton />
                    <CatGenderButton />
                    <CatAgeButton />
                    <CatRegisterButton />
                </div>
            </div>
        </div>
    )
}
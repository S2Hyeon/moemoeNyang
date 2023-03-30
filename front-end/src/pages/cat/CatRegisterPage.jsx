import React from "react"
import CatImageRegister from "../../components/cat/CatImageRegister";
import CatNameButton from "../../components/cat/CatNameButton";
import CatGenderButton from "../../components/cat/CatGenderButton";
import CatAgeButton from "../../components/cat/CatAgeButton";
// import ImgUpload from "../../components/upload/ImgUpload";
// import CatNameInput from "../../components/cat/CatNameInput";
// import CatGenderInput from "../../components/cat/CatGenderInput";
// import CatAgeInput from "../../components/cat/CatAgeInput";



const CatRegisterPage = () => {
    return(
        // <div className="ml-4 mr-4">
        <div className="flex justify-center items-center">
            <div className="w-auto grid gap-4 py-4">
                {/* <ImgUpload /> */}
                <CatImageRegister />
                <div className="grid place-items-center w-full mt-4 mb-4 ">
                    <CatNameButton />
                    <CatGenderButton />
                    <CatAgeButton />
                    {/* <CatNameInput /> */}
                    {/* <CatGenderInput /> */}
                    {/* <CatAgeInput /> */}
                    <button 
                        className="flex justify-center items-center w-[335px] h-[66px] rounded-[30px] bg-[#e87f7f]"
                        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                        >
                        <p className="flex justify-center w-[58px] h-[35px] left-[172px] top-[690px] text-xl font-bold text-left text-white">
                        등록
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CatRegisterPage;
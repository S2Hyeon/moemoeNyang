import React from "react";
import { useNavigate } from "react-router";
import { postCatRegist } from "../../services/cats";
import { AlertSuccess } from "../../utils/alertToastify";

function CatRegisterButton({ catData}) {
    const navigate = useNavigate();
    const onSubmit = (event) => {
        console.log("버튼 컴포넌트", catData)
        const {name , age, gender, image } = catData
        event.preventDefault();
        postCatRegist(name , age, gender, image).then((res) => {
            console.log(res);
            AlertSuccess("고양이를 등록하였습니다.");
            navigate("/catlist");
        })
    }

    

    return(
        <form enctype="multipart/form-data">
        <button 
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        className="flex justify-center items-center w-[335px] h-[66px] rounded-[30px] bg-[#e87f7f]"
        onClick={onSubmit}
        >
        <p className="flex justify-center w-[58px] h-[35px] left-[172px] top-[690px] text-xl font-bold text-left items-center text-white">
        등록
        </p>
        </button>
        </form>
    )
}

export default CatRegisterButton;
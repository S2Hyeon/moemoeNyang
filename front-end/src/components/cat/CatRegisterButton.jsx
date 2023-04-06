import React from "react";
import { useNavigate } from "react-router";
import { postCatRegist } from "../../services/cats";
import { AlertSuccess, AlertWarning } from "../../utils/alertToastify";
import { typedUseSelector } from "../../store";
// import { AlertSuccess } from "../../utils/alertToastify";

function CatRegisterButton({ catData }) {
  const navigate = useNavigate();
  const universityId = typedUseSelector(
    (state) => state.member.memberObject.universityId,
  );
  const onSubmit = (event) => {
    event.preventDefault();
    const { name, age, gender, image, lat, lng } = catData;

    if (!universityId) return AlertWarning("로그인이 필요합니다.");
    if (!image) return AlertWarning("사진을 등록해주세요");
    if (!name) return AlertWarning("이름을 등록해주세요");

    const formData = new FormData();
    formData.append("universityId", universityId);
    formData.append("name", name);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("image", image);
    formData.append("lat", lat);
    formData.append("lng", lng);

    postCatRegist(formData).then((res) => {
      // AlertSuccess(res.data.msg)
      AlertSuccess("고양이를 등록하였습니다.");
      navigate("/catlist");
    });
  };

  return (
    <form encType="multipart/form-data">
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
  );
}

export default CatRegisterButton;

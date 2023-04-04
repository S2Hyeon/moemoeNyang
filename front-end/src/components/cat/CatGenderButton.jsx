import { useState } from "react";

function CatGenderButton() {
  const [buttonGroupVisible, setButtonGroupVisible] = useState(false);
  const [gender, setGender] = useState("");

  const handleClick = () => {
    setButtonGroupVisible(true);
  };

  const handleButtonGroupClick = (e) => {
    setGender(e.target.getAttribute("gender"));
    setButtonGroupVisible(false);
  };

  return (
    <div className="mb-4" style={{ position: "relative", width: "335px", height: "41.79px" }}>
      {buttonGroupVisible ? (
        <div style={{ position: "absolute", width: "100%" }}>
          <div className="flex justify-center flex-wrap">
            <div className="flex">
              <button
                className="text-base rounded-r-none active:bg-[#dbbaba] flex justify-center px-20 py-2.5 rounded-full font-bold cursor-pointer bg-[#f1ebeb]"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                gender="M"
                onClick={handleButtonGroupClick}
              >
                <div className="flex leading-5">남</div>
              </button>
              <button
                className="text-base rounded-l-none active:bg-[#dbbaba] flex justify-center px-20 py-2.5 rounded-full font-bold cursor-pointer bg-[#f1ebeb]"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                gender="F"
                onClick={handleButtonGroupClick}
              >
                <div className="flex leading-5">여</div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
          className="rounded-full w-full h-full bg-[#f1ebeb] px-5 py-3 text-base mb-3 font-medium text-black transition duration-200 active:bg-[#e2d5d5]"
          onClick={handleClick}
        >
          {gender === "M" ? "남" : gender === "F" ? "여" : "성별"}
        </button>
      )}
    </div>
  );
}

export default CatGenderButton;

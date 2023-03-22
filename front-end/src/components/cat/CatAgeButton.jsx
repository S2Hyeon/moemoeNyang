import { useState } from "react";

function CatAgeButton() {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  
  const handleClick = () => {
    setInputVisible(true);
  };
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleInputBlur = () => {
    setInputVisible(false);
  };
  
  return (
    <div>
      {inputVisible ? (
        <input
          type="number"
          placeholder="숫자만 입력해 주세요."
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[335px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      ) : (
        <button style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }} class="rounded-full w-[335px] h-[41.79px] bg-[#f1ebeb] px-5 py-3 text-base mb-3 font-medium text-black transition duration-200 active:bg-[#e2d5d5]" onClick={handleClick}>{inputValue || "나이"}</button>
      )}
    </div>
  );
}

export default CatAgeButton;
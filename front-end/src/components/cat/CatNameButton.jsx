import { useState } from "react";

function CatNameButton(props) {
  const [inputVisible, setInputVisible] = useState(false);
  const [name, setName] = useState("");
  
  const handleClick = () => {
    setInputVisible(true);
  };
  
  const handleInputChange = (e) => {
    setName(e.target.value);
    props.onChange(e.target.value);
  };
  
  const handleInputBlur = () => {
    setInputVisible(false);
  };
  
  return (
    <div className="mb-4" style={{ position: "relative", width: "335px", height: "41.79px" }}>
      {inputVisible ? (
        <input
          type="text"
          placeholder="이름을 입력해 주세요."
          value={name}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      ) : (
        <button
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
          className="rounded-full w-full h-full bg-[#f1ebeb] px-5 py-3 text-base mb-3 font-medium text-black transition duration-200 active:bg-[#e2d5d5]"
          onClick={handleClick}
        >
          {name || "이름"}
        </button>
      )}
    </div>
  );
}

export default CatNameButton;

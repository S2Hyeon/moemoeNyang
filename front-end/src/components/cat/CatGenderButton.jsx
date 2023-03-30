import { useState } from "react";

// 추후 선택형으로 수정 예정
function CatGenderButton() {
  const [inputVisible, setInputVisible] = useState(false);
  const [gender, setGender] = useState("");
  
  const handleClick = () => {
    setInputVisible(true);
  };
  
  const handleInputChange = (e) => {
    setGender(e.target.value);
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
          value={gender}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      ) : (
    <div className="flex justify-center items-baseline flex-wrap">
        <div className="flex ">
            <button className="text-base  rounded-r-none  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
         
        bg-gray-100 
        
        border duration-200 ease-in-out 
        border-gray-600 transition">
                <div className="flex leading-5">
                    
                    남아 </div>
            </button>
            <button className="text-base  rounded-l-none border-l-0  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        
        border duration-200 ease-in-out 
        border-teal-600 transition">
                <div className="flex leading-5">
                  여아
                    
                </div>
            </button>
        </div>
        </div>
      )}
      </div>
  );
}

export default CatGenderButton;
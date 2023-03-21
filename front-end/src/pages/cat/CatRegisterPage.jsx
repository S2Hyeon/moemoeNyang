import React from "react"
import CatRegister from "../../components/cat/CatRegister";

const CatRegisterPage = () => {
    return(
        <div className="flex justify-center items-center h-screen">
            <CatRegister />

            <div className="w-[335px] h-[41.79px]">
                <div
                className="w-[335px] h-[41.79px] absolute left-[28.5px] top-[482.5px] rounded-[10px] bg-[#f1ebeb]"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                />
                <p className="w-[58px] h-[22px] absolute left-[174px] top-[496px] text-xl font-bold text-left text-black">
                    이름
                </p>
            </div>
            <div className="w-[335px] h-[41.79px]">
                <div
                    className="w-[335px] h-[42px] absolute left-7 top-[544px] rounded-[10px] bg-[#f1ebeb]"
                    style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                    />
                <p className="w-[58px] h-[22px] absolute left-[174px] top-[558px] text-xl font-bold text-left text-black">
                    성별
                </p>
                </div>
            <div className="w-[335px] h-[41.79px]">
                <div
                className="w-[335px] h-[41.79px] absolute left-[27.5px] top-[605.71px] rounded-[10px] bg-[#f1ebeb]"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                />
                <p className="w-[58px] h-[22px] absolute left-[173px] top-[619px] text-xl font-bold text-left text-black">
                    나이
                </p>
            </div>
            <div className="w-[335px] h-[66px]">
                <div
                className="w-[335px] h-[66px] absolute left-[26.5px] top-[667.5px] rounded-[30px] bg-[#e87f7f]"
                style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                />
                <p className="w-[58px] h-[35px] absolute left-[172px] top-[690px] text-xl font-bold text-left text-white">
                    등록
                </p>
            </div>
            
        </div>
    )
}

export default CatRegisterPage;

// import React, { useState } from 'react';

// function FileUploadComponent() {
//   const [file, setFile] = useState(null);

//   function handleFileSelect(e) {
//     setFile(e.target.files[0]);
//   }

//   return (
//     <div>
//       <label htmlFor="file-input">Select a file:</label>
//       <input
//         type="file"
//         id="file-input"
//         accept="image/*, video/*"
//         onChange={handleFileSelect}
//       />
//       {file && (
//         <div>
//           <p>Selected file: {file.name}</p>
//           <img src={URL.createObjectURL(file)} alt="Selected file" />
//         </div>
//       )}
//     </div>
//   );
// }

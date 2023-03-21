import React from "react";
// import { AiFillCamera } from "@react-icons/all-files/ai/AiFillCamera";

const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
  };
  
export default function CatRegister() {
    return (
        <div
        className="w-[335px] h-[335px] absolute left-[28.5px] top-[126.5px] rounded-[10px] bg-[#faeaea]"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
            <label For="dropzone-file">업로드</label>
            <input id="dropzone-file" type="file" class="hidden" onChange={handleFileChange} />
        </div>
    )
}
                    // <svg
                    //     width={37}
                    //     height={37}
                    //     viewBox="0 0 37 37"
                    //     fill="none"
                    //     xmlns="http://www.w3.org/2000/svg"
                    //     className="w-[37px] h-[37px] absolute left-[178px] top-[276px]"
                    //     preserveAspectRatio="none"
                    // >
                    //     <path
                    //     d="M18.5 23.4333C21.2246 23.4333 23.4333 21.2246 23.4333 18.5C23.4333 15.7754 21.2246 13.5667 18.5 13.5667C15.7754 13.5667 13.5667 15.7754 13.5667 18.5C13.5667 21.2246 15.7754 23.4333 18.5 23.4333Z"
                    //     fill="black"
                    //     />
                    //     <path
                    //     d="M13.875 3.08331L11.0537 6.16665H6.16665C4.47081 6.16665 3.08331 7.55415 3.08331 9.24998V27.75C3.08331 29.4458 4.47081 30.8333 6.16665 30.8333H30.8333C32.5291 30.8333 33.9166 29.4458 33.9166 27.75V9.24998C33.9166 7.55415 32.5291 6.16665 30.8333 6.16665H25.9462L23.125 3.08331H13.875ZM18.5 26.2083C14.245 26.2083 10.7916 22.755 10.7916 18.5C10.7916 14.245 14.245 10.7916 18.5 10.7916C22.755 10.7916 26.2083 14.245 26.2083 18.5C26.2083 22.755 22.755 26.2083 18.5 26.2083Z"
                    //     fill="black"
                    //     />
                    // </svg>
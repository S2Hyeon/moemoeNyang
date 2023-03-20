import React from "react";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";

export default function BoardHeader() {
  return (
    <>
      <div className="h-12 grid grid-cols-10 items-center mt-1 mb-1">
        <div className="flex justify-start items-center col-span-6">
          <img
            className="w-10 h-10 rounded-full ml-4 "
            src="https://img.freepik.com/premium-photo/cat-walking-on-the-fence-on-blue-sky_74782-363.jpg?w=996"
            alt="고양이 프로필 이미지"
          />
          <div className="text-lg pl-2">냥냥이</div>
        </div>
        <div className="flex items-center col-span-3">
          <AiFillStar className="text-xl text-yellow-300" />
          <p className="text-lg pl-2">냥집사</p>
        </div>
        <div className="text-xl items-center">🚨</div>
      </div>
    </>
  );
}

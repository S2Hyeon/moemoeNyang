import React from "react";
import { AiFillCamera } from "@react-icons/all-files/ai/AiFillCamera";

export default function PostBoard() {
  return (
    <div className="m-2 flex flex-col">
      <div className="dropdown">
        <label
          tabIndex={0}
          className="btn btn-ghost m-1 bg-transparent border-solid"
        >
          고양이 선택 🔻
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a href="#!">냥냥이</a>
          </li>
          <li>
            <a href="#!">삼색이</a>
          </li>
        </ul>
      </div>
      <div className="grid place-items-center w-full h-80 mr-4 bg-slate-200 rounded-xl">
        <AiFillCamera className="w-20 text-slate-500" />
      </div>
      <div className="grid place-items-center w-full h-10 mt-4 mb-4 bg-lisa-200 rounded-xl">
        <span>분석</span>
      </div>
    </div>
  );
}

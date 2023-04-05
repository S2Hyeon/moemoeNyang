import React, { useState } from "react";

export default function TimeLineCard({ diseaseData }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="flex rounded-xl shadow-xl ml-4 p-4">
      {!showDescription && (
        <div className="flex items-center mr-4">
          <img
            className="w-20 h-20"
            src={diseaseData.image}
            alt="고양이피부병이미지"
          />
        </div>
      )}
      <div>
        <div className="m-1">
          <span className="font-bold">질병명 :</span>
          <span>{diseaseData.disease.name}</span>
        </div>
        <div className="m-1">
          <span className="font-bold">등록자 : </span>
          <span>{diseaseData.nickname}</span>
        </div>
        <div className="m-1">
          <p
            className="font-bold"
            onClick={() => setShowDescription(!showDescription)}
          >
            질병 설명 🔻
          </p>
          {showDescription && <p>{diseaseData.disease.explanation}</p>}
        </div>
      </div>
    </div>
  );
}

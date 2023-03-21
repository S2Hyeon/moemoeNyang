import React, { useState } from "react";

export default function TimeLineCard() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="flex rounded-xl shadow-xl ml-4 p-4">
      {!showDescription && (
        <div className="flex items-center mr-4">
          <img
            className="w-20 h-20"
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9994783359E18E601D"
            alt="고양이피부병이미지"
          />
        </div>
      )}
      <div>
        <div className="m-1">
          <span className="font-bold">질병명 :</span>
          <span> 피부사상균</span>
        </div>
        <div className="m-1">
          <span className="font-bold">등록자 : </span>
          <span>싸피냥집사</span>
        </div>
        <div className="m-1">
          <p
            className="font-bold"
            onClick={() => setShowDescription(!showDescription)}
          >
            질병 설명 🔻
          </p>
          {showDescription && (
            <p>
              곰팡이성 피부염인 고양이 링웜. 사람에게도 전염되기 때문에 걱정하는
              사람들이 많다. 면역력이 떨어져 있는 고양이나. 평소 외부 외출을
              하는 고양이들. 또는 열악하고 비위생적인 환경에서 감염될 가능성이
              높다
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

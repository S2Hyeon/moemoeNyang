import React from "react";
import Button from "../../components/common/Button";
import KakaoMap from "../../components/common/KakaoMap";

export default function FeedRegisterPage() {
  //이미지 메타정보 얻기 : https://blog.naver.com/PostView.naver?blogId=hj_kim97&logNo=222309039397&parentCategoryNo=&categoryNo=16&viewDate=&isShowPopularPosts=true&from=search
  //
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 grid gap-4 py-4">
        <input
          autoFocus={true}
          className={`text-lg font-bold text-center w-full rounded border px-2 py-2 focus:outline-none active:outline-none bg-[#F1EBEB] border-gray-300`}
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
          placeholder="급식소명"
          type="text"
        />
        <textarea
          autoFocus={true}
          className={`text-lg font-bold text-center w-full rounded border px-2 py-2 focus:outline-none active:outline-none bg-[#F1EBEB] border-gray-300`}
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
          placeholder="급식소 설명"
          rows="4"
          maxLength={80}
          type="number"
        />
        <div
          className="w-full aspect-square max-h-[30vh] rounded-[10px] bg-[#faeaea]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <label For="dropzone-file">
            <svg
              width={37}
              height={37}
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[37px] h-[37px] relative left-1/2 top-1/2 translate-x-[-50%] -y-[-50%] "
              preserveAspectRatio="none"
            >
              <path
                d="M18.5 23.4333C21.2246 23.4333 23.4333 21.2246 23.4333 18.5C23.4333 15.7754 21.2246 13.5667 18.5 13.5667C15.7754 13.5667 13.5667 15.7754 13.5667 18.5C13.5667 21.2246 15.7754 23.4333 18.5 23.4333Z"
                fill="black"
              />
              <path
                d="M13.875 3.08331L11.0537 6.16665H6.16665C4.47081 6.16665 3.08331 7.55415 3.08331 9.24998V27.75C3.08331 29.4458 4.47081 30.8333 6.16665 30.8333H30.8333C32.5291 30.8333 33.9166 29.4458 33.9166 27.75V9.24998C33.9166 7.55415 32.5291 6.16665 30.8333 6.16665H25.9462L23.125 3.08331H13.875ZM18.5 26.2083C14.245 26.2083 10.7916 22.755 10.7916 18.5C10.7916 14.245 14.245 10.7916 18.5 10.7916C22.755 10.7916 26.2083 14.245 26.2083 18.5C26.2083 22.755 22.755 26.2083 18.5 26.2083Z"
                fill="black"
              />
            </svg>
          </label>
        </div>
        <div
          className="MapContainer w-full h-[20vh]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <KakaoMap />
        </div>
        <div className="하단버튼부">
          <Button shadow={true}>등록</Button>
        </div>
        {/* <div
        className="w-[335px] h-[335px] absolute left-[28.5px] top-[126.5px] rounded-[10px] bg-[#faeaea] "
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      >
        <label For="dropzone-file">
          <svg
            width={37}
            height={37}
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[37px] h-[37px] absolute left-[178px] top-[276px] "
            preserveAspectRatio="none"
          >
            <path
              d="M18.5 23.4333C21.2246 23.4333 23.4333 21.2246 23.4333 18.5C23.4333 15.7754 21.2246 13.5667 18.5 13.5667C15.7754 13.5667 13.5667 15.7754 13.5667 18.5C13.5667 21.2246 15.7754 23.4333 18.5 23.4333Z"
              fill="black"
            />
            <path
              d="M13.875 3.08331L11.0537 6.16665H6.16665C4.47081 6.16665 3.08331 7.55415 3.08331 9.24998V27.75C3.08331 29.4458 4.47081 30.8333 6.16665 30.8333H30.8333C32.5291 30.8333 33.9166 29.4458 33.9166 27.75V9.24998C33.9166 7.55415 32.5291 6.16665 30.8333 6.16665H25.9462L23.125 3.08331H13.875ZM18.5 26.2083C14.245 26.2083 10.7916 22.755 10.7916 18.5C10.7916 14.245 14.245 10.7916 18.5 10.7916C22.755 10.7916 26.2083 14.245 26.2083 18.5C26.2083 22.755 22.755 26.2083 18.5 26.2083Z"
              fill="black"
            />
          </svg>
        </label>
        <input id="dropzone-file" type="file" class="hidden" />
      </div>

      <button className="w-[335px] h-[41.79px]">
        <div
          className="w-[335px] h-[41.79px] absolute left-[28.5px] top-[482.5px] rounded-[10px] bg-[#f1ebeb]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        />
        <p className="w-[58px] h-[22px] absolute left-[174px] top-[496px] text-xl font-bold text-left text-black">
          이름
        </p>
      </button>
      <button className="w-[335px] h-[41.79px]">
        <div
          className="w-[335px] h-[42px] absolute left-7 top-[544px] rounded-[10px] bg-[#f1ebeb]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        />
        <p className="w-[58px] h-[22px] absolute left-[174px] top-[558px] text-xl font-bold text-left text-black">
          성별
        </p>
      </button>
      <button className="w-[335px] h-[41.79px]">
        <div
          className="w-[335px] h-[41.79px] absolute left-[27.5px] top-[605.71px] rounded-[10px] bg-[#f1ebeb]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        />
        <p className="w-[58px] h-[22px] absolute left-[173px] top-[619px] text-xl font-bold text-left text-black">
          나이
        </p>
      </button>
      <button className="w-[335px] h-[66px]">
        <div
          className="w-[335px] h-[66px] absolute left-[26.5px] top-[667.5px] rounded-[30px] bg-[#e87f7f]"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        />
        <p className="w-[58px] h-[35px] absolute left-[172px] top-[690px] text-xl font-bold text-left text-white">
          등록
        </p>
      </button> */}
      </div>
    </div>
  );
}

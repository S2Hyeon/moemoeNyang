import React from "react";

export default function ReportCard({ idx }) {
  return (
    <div className="w-11/12 grid gap-4">
      <div className="w-full h-40 rounded-[10px] bg-[#f1ebeb] p-3">
        <div className="HeaderContainer w-full flex justify-around items-center">
          <div className="ReportTitle text-sm font-bold">
            {idx}번 게시글에서 <span className="text-[#f00]">캡션 부정확</span>{" "}
            신고 접수
          </div>
          <div className="ButtonContainer flex gap-2">
            <div
              role="button"
              className="w-12 h-8 rounded-[10px] font-bold bg-white p-1 flex items-center justify-center"
              style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
            >
              삭제
            </div>
            <div
              role="button"
              className="w-12 h-8 rounded-[10px] font-bold bg-white p-1 flex items-center justify-center"
              style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
            >
              취소
            </div>
          </div>
        </div>
        <div className="BodyContainer w-full h-5/6 flex justify-around items-center">
          <div className="ButtonContainer w-full h-5/6">
            <div className="w-full h-full">
              <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center">
                <p className="text-sm font-bold text-black">
                  사용자 작성한 신고 내역(글)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

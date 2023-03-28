import React from "react";
import Button from "../../common/Button";

export default function FeedContent() {
  //채팅창디자인 https://codepen.io/robstinson/pen/oNLaLMN
  return (
    <div>
      <div className="grid gap-3 w-11/12 mx-auto pt-2">
        <div
          className="FeedSpotInfo  h-32 left-[15.5px] top-[321.5px] rounded-[10px] bg-white flex justify-around py-2"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <img src="image-19.png" className="w-[113px] h-28  object-cover" />
          <div className="w-52 h-28 grid left-[147px] top-[338px] text-[10px] text-left text-black py-2 gap-1">
            <div>
              <span className="w-52 h-28 text-[10px] font-bold text-left text-black">
                급식소명
              </span>
              <span className="w-52 h-28 text-[10px] text-left text-black">
                : 자연과학대
              </span>
            </div>
            <div>
              <span className="w-52 h-28 text-[10px] font-bold text-left text-black">
                급식소 등록일자
              </span>
              <span className="w-52 h-28 text-[10px] text-left text-black">
                : 2023.03.13
              </span>
            </div>
            <div>
              <span className="w-52 h-28 text-[10px] font-bold text-left text-black">
                등록자
              </span>
              <span className="w-52 h-28 text-[10px] text-left text-black">
                : 드루이드
              </span>
            </div>
            <div>
              {/* <span className="w-52 h-28 text-xs font-bold text-left text-black">
                급식소 설명
              </span>
              <br /> */}
              <span className="w-52 h-28 text-xs text-left text-black">
                자연과학대에서 관리하는 급식소입니다. 매일 오후 2시에
                급여합니다. 간식은 주지 마세요 ㅠㅠ
              </span>
            </div>
          </div>
        </div>
        <div
          className="FeedSpotInfo h-[35vh] left-[15.5px] top-[321.5px] rounded-[10px] bg-white flex justify-around pt-2"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
              <div className="상대가쓴밥줬어요 flex w-full mt-2 space-x-3 max-w-xs">
                <div className="pr-5">
                  <div className="text-sm font-bold text-gray-500 leading-none py-1">
                    드루이드
                  </div>
                  <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="text-xs py-1 text-gray-500 leading-none">
                    2 min ago
                  </div>
                </div>
              </div>
              <div className="상대가쓴밥줬어요 flex w-full mt-2 space-x-3 max-w-xs">
                <div className="pr-5">
                  <div className="text-sm font-bold text-gray-500 leading-none py-1">
                    드루이드
                  </div>
                  <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="text-xs py-1 text-gray-500 leading-none">
                    2 min ago
                  </div>
                </div>
              </div>
              <div className="내가쓴밥줬어요 flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                <div className="pl-5">
                  <div className="text-sm text-end font-bold text-gray-500 leading-none py-1">
                    드루이드
                  </div>
                  <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                  <div className="text-xs text-end py-1 text-gray-500 leading-none">
                    2 min ago
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="밥줬어요버튼컨테이너 bg-gray-300 p-4">
              <input
                className="flex items-center h-10 w-full rounded px-3 text-sm"
                type="text"
                placeholder="Type your message…"
              />
            </div> */}
          </div>
        </div>
        <div className="하단버튼부">
          <Button shadow={true}>밥줬다냥</Button>
        </div>
      </div>
    </div>
  );
}

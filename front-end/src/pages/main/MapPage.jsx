import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import BoardContent from "../../components/map/bottom-contents/BoardContent";
import FeedContent from "../../components/map/bottom-contents/FeedContent";
import MapContainer from "../../components/map/MapContainer";
import { getCatList } from "../../services/cats";
import { getMainPostList } from "../../services/main";
import { typedUseSelector } from "../../store";
import {
  setBottomToggle,
  setCatList,
  setSelectedCat,
} from "../../store/mapSlice";
import { IoMdArrowDropup } from "@react-icons/all-files/io/IoMdArrowDropup"
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown"

/*지도 페이지
isHigh - 바텀 슬라이드가 올라가 있는지 체크
clickOutside - 바텀 슬라이드를 자동으로 닫음
getCatList - 마운트 됐을 때 대학 정보를 기반으로 고양이 리스트, 선택된 고양이를 초기화

*/

/*BoardContent
selected 캣이 변했을 때 게시글 목록 가져옴
가져온 게시글 목록으로 positons 배열 만들어서 저장하기
*/
const MapPage = () => {
  const dispatch = useDispatch();
  const isHigh = typedUseSelector((state) => state.map.isBottomHigh);
  const bottomSlideRef = useRef();

  const clickOutside = (e) => {
    if (!bottomSlideRef.current.contains(e.target) && isHigh === true) {
      dispatch(setBottomToggle(false));
    }
  };

  const { universityId } = typedUseSelector((state) => {
    return state.member.memberObject;
  });

  const catList = typedUseSelector((state) => state.map.catList);

  // if (!catList.length) {
  useEffect(() => {
    getCatList(universityId).then((res) => {
      dispatch(setCatList(res.data));
      dispatch(setSelectedCat(res.data[0]));
    });
  }, []);
  // }

  let bottomContent;
  const [mode, setMode] = useState("Board");

  switch (mode) {
    case "Board":
      bottomContent = <BoardContent />;
      break;
    case "Feed":
      bottomContent = <FeedContent />;
      break;

    default:
      break;
  }

  /*
  1. 대학교 정보 불러와서 대학교 위치를 center로 넘겨주기 - 대학교 위치를 넘겨줄 수가 없음. 선택된 고양이의 마지막 게시글을 center로 해야할듯.
  2. 고양이가 선택되면, 고양이 사진을 마커에 넣기
  3. 게시글 목록에 있는 위치들을 기반으로 지도 위에 마커 추가하기
  4. '급식소 Visible'이 켜지면 급식소들의 위치도 마커 추가하기
  */

  return (
    <div onClick={clickOutside}>
      <MapContainer mode={mode} />
      <div
        className="absolute top-14 right-20 bg-slate-400 z-[1]"
        onClick={() => {
          setMode("Feed");
        }}
      >
        급식먹쟈
      </div>
      <div
        className="absolute top-14 right-4 bg-slate-400 z-[1]"
        onClick={() => {
          setMode("Board");
        }}
      >
        냥이보자
      </div>
      <div
        className="z-[1] absolute bottom-[46px] w-screen flex justify-center pt-6 overflow-hidden"
        ref={bottomSlideRef}
      >
        <div
          className={`BottomSheet bg-slate-50 w-[100vw] ${
            isHigh ? "h-[65vh]" : "h-[20vh]"
          } shadow-md rounded-t-2xl transition-[height]`}
        >
          <div
            className="absolute top-[0px] left-1/2 transform -translate-x-1/2 rounded-full bg-orange-300 w-12 h-12"
            onClick={() => {
              dispatch(setBottomToggle());
            }}
          >{isHigh? <i><IoMdArrowDropdown className="w-full h-full text-white"/></i> : <i><IoMdArrowDropup className="w-full h-full text-white" /></i>}</div>
          <div className="BottomContainer mt-6 h-4/5">{bottomContent}</div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;

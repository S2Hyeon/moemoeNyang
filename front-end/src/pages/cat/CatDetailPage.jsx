import React, { useState, useEffect } from "react";
import KakaoMap from "../../components/common/KakaoMap";
import CatProfileBox from "../../components/cat/CatProfileBox";
import CatGrid from "../../components/cat/CatGrid";
import {
  getCatDetail,
  postCatFollow,
  deleteCatFollow,
} from "../../services/cats";
import { useParams } from "react-router-dom";
import BoardFlick from "../../components/map/BoardFlick";
import { getMainBoardList } from "../../services/main";
import { setPostList } from "../../store/mapSlice";
import { useDispatch } from "react-redux";
import { typedUseSelector } from "../../store";
import KakaoMapSdk from "../../components/common/KakaoMapSdk";
import BoardPin from "../../components/map/BoardPin";
import { CustomOverlayMap } from "react-kakao-maps-sdk";

export default function CatDetailPage() {
  const [catInfo, setCatInfo] = useState([]);
  const [isFollowing, setIsFollowing] = useState(null);

  const { catId } = useParams();
  const universityId = typedUseSelector(
    (state) => state.member.memberObject.universityId,
  );
  const dispatch = useDispatch();

  const [boardId, setBoardId] = useState("");
  const [catImage, setCatImage] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  useEffect(() => {
    getMainBoardList(universityId, catId).then((res) => {
      const postList = res.data.content;
      dispatch(setPostList(postList));
      const latestPost = postList[0];
      setBoardId(latestPost.board_id);
      setCatImage(latestPost.image);
      setLat(latestPost.lat);
      setLng(latestPost.lng);
    });
  }, []);

  useEffect(() => {
    getCatDetail(catId)
      .then((res) => {
        setCatInfo(res.data);
      })
      .then(() => setIsFollowing(catInfo.is_following));
  }, []);

  useEffect(() => {
    getCatDetail(catId).then((res) => {
      setCatInfo(res.data);
    });
  }, [isFollowing]);

  useEffect(() => {
    if (!catInfo.length) return;
    console.log("cat detail page에서 catInfo 불러오기");
    console.log(catInfo);
  }, [catInfo]);

  function onFollow(catId) {
    console.log("follow", catId);
    postCatFollow(catId).then(() => setIsFollowing(1));
  }

  function onUnFollow(catId) {
    console.log("unFollow", catId);
    deleteCatFollow(catId).then(() => setIsFollowing(null));
  }

  return (
    <>
      <div className=" pl-4 pr-4">
        <CatProfileBox catInfo={catInfo} />
        <div className="flex flex-col justify-center items-center">
          {catInfo.is_following === null || catInfo.is_following === 0 ? (
            <button
              className={`grid place-items-center rounded-full w-full h-10 bg-[#e29c9c] text-base mb-6 transition duration-200 `}
              onClick={() => onFollow(catInfo.cat_id)}
            >
              <div className="font-medium text-white">팔로우</div>
            </button>
          ) : (
            <button
              className={`grid place-items-center rounded-full w-full h-10 bg-[#ababab] text-base mb-6 transition duration-200 `}
              onClick={() => onUnFollow(catInfo.cat_id)}
            >
              <div className="font-medium text-white">언팔로우</div>
            </button>
          )}

          <div
            className="MapContainer w-full h-[13vh] rounded-sm"
            style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
          >
            {/* <KakaoMap lat={catInfo.lat} lng={catInfo.lng} /> */}
            <KakaoMapSdk center={{ lat: lat, lng: lng }}>
              <CustomOverlayMap position={{ lat: lat, lng: lng }}>
                <BoardPin boardId={boardId} catImage={catImage} />
              </CustomOverlayMap>
            </KakaoMapSdk>
          </div>
        </div>
        <div className="text-left font-bold text-lg mt-4 ml-4">Board</div>
        <div className="flex flex-col justify-center items-center pl-4 pr-4">
          {/* <CatGrid catInfo={catInfo} /> */}
          <div className="max-w-full">
            <BoardFlick />
          </div>
        </div>
      </div>
    </>
  );
}

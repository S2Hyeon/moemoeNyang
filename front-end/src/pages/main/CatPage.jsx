import React, { useState, useEffect } from "react";
import CatCard from "../../components/mypage/CatCard";
import { HiPlusCircle } from "@react-icons/all-files/hi/HiPlusCircle";
import { useNavigate } from "react-router-dom";
import { getCatList } from "../../services/cats";

export default function CatPage() {
  const navigate = useNavigate();

  const navigateToCatRegister = () => {
    navigate("/catregister");
  };

<<<<<<< HEAD
  const navigateToCatDetail = (cat_id) => {
    console.log("고양이 deail로 이동 id : ", cat_id);
    navigate(`/cat/${cat_id}`);
  };

=======
>>>>>>> af335cace52712f4d8c30d384a370293d84ac79b
  const [catList, setCateList] = useState([]);

  useEffect(() => {
    getCatList().then((res) => setCateList(res.data));
  }, []);

  useEffect(() => {
    if (!catList.length) return;
<<<<<<< HEAD
    console.log("catlist page에서 cat list 불러오기");
=======
    console.log("cat list 불러오기");
>>>>>>> af335cace52712f4d8c30d384a370293d84ac79b
    console.log(catList);
  }, [catList]);

  return (
    <div className="flex flex-wrap pl-4 pr-4">
      {catList.map((cat) => {
<<<<<<< HEAD
        return (
          <div
            className="w-1/2"
            onClick={() => navigateToCatDetail(cat.cat_id)}
            key={cat.cat_id}
          >
            <CatCard catInfo={cat} />
          </div>
        );
      })}
      <HiPlusCircle
        className="postFloatBtn z-50 absolute text-lisa-500 w-12 h-12 right-8 bottom-14"
=======
        return <CatCard catInfo={cat} />;
      })}
      <HiPlusCircle
        className="z-50 absolute text-lisa-500 w-12 h-12 right-8 bottom-14"
>>>>>>> af335cace52712f4d8c30d384a370293d84ac79b
        onClick={navigateToCatRegister}
      />
    </div>
  );
}

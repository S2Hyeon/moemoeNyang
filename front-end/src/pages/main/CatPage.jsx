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
=======
  const navigateToCatDetail = (cat_id) => {
    console.log("고양이 deail로 이동 id : ", cat_id);
    navigate(`/cat/${cat_id}`);
  };

>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
  const [catList, setCateList] = useState([]);

  useEffect(() => {
    getCatList().then((res) => setCateList(res.data));
  }, []);

  useEffect(() => {
    if (!catList.length) return;
<<<<<<< HEAD
    console.log("cat list 불러오기");
=======
    console.log("catlist page에서 cat list 불러오기");
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
    console.log(catList);
  }, [catList]);

  return (
    <div className="flex flex-wrap pl-4 pr-4">
      {catList.map((cat) => {
<<<<<<< HEAD
        return <CatCard catInfo={cat} />;
      })}
      <HiPlusCircle
        className="z-50 absolute text-lisa-500 w-12 h-12 right-8 bottom-14"
=======
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
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
        onClick={navigateToCatRegister}
      />
    </div>
  );
}

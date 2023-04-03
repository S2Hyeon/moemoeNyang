import React, { useState, useEffect } from "react";
import CatCard from "./CatCard";
import { getFollowList } from "../../services/mypage";

export default function FollowCatList() {
  const [followCatList, setFollowCatList] = useState([]);

  useEffect(() => {
    getFollowList()
      .then((res) => setFollowCatList(res.data.cats))
      .then(console.log("follow cat list", followCatList));
  }, []);

  useEffect(() => {
    if (!followCatList.length) return;
    console.log("cat list 불러오기");
    console.log(followCatList);
  }, [followCatList]);

  return (
    <div className="flex flex-wrap pl-4 pr-4">
      {followCatList.map((cat) => {
        return <CatCard catInfo={cat} key={cat.cat_id} />;
      })}
    </div>
  );
}

<<<<<<< HEAD
import React from "react";

export default function BadgeList() {
  return (
    <div className="flex flex-wrap pl-8 pr-8">
      <img className="w-1/3 p-2" src="/images/badgeImg/cat_1.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/cat_3.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/cat_6.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/disease_1.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/disease_3.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/disease_6.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/emoji_1.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/emoji_3.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/emoji_6.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/nobadge.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/nobadge.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/nobadge.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/nobadge.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/nobadge.png" alt="" />
      <img className="w-1/3 p-2" src="/images/badgeImg/nobadge.png" alt="" />
=======
import React, { useState, useEffect } from "react";
import { getUserBadge } from "../../services/mypage";

export default function BadgeList() {
  const [badgeList, setBadgeList] = useState([]);

  useEffect(() => {
    getUserBadge()
      .then((res) => setBadgeList(res.data))
      .then(console.log(badgeList));
  }, []);

  useEffect(() => {
    if (!badgeList.length) return;
    console.log("badge list 불러오기");
    console.log(badgeList);
  }, [badgeList]);

  return (
    <div className="flex flex-wrap pl-8 pr-8">
      {badgeList.cat_regist_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img
          className="w-1/3"
          src="/images/badgeImg/cat_regist_cnt_1.png"
          alt=""
        />
      )}
      {badgeList.cat_regist_cnt >= 10 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/cat_regist_cnt_5.png"
          alt=""
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.cat_regist_cnt >= 20 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/cat_regist_cnt_10.png"
          alt=""
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.disease_regist_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/disease_1.png" alt="" />
      )}

      {badgeList.disease_regist_cnt >= 15 ? (
        <img className="w-1/3" src="/images/badgeImg/disease_3.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.disease_regist_cnt >= 30 ? (
        <img className="w-1/3" src="/images/badgeImg/disease_6.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.feed_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/feed_cnt_1.png" alt="" />
      )}
      {badgeList.feed_cnt >= 10 ? (
        <img className="w-1/3" src="/images/badgeImg/feed_cnt_10.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.feed_cnt >= 20 ? (
        <img className="w-1/3" src="/images/badgeImg/feed_cnt_20.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.login_days_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img
          className="w-1/3"
          src="/images/badgeImg/login_days_cnt_7.png"
          alt=""
        />
      )}
      {badgeList.login_days_cnt >= 7 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/login_days_cnt_30.png"
          alt=""
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.login_days_cnt >= 100 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/login_days_cnt_100.png"
          alt=""
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.post_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/post_1.png" alt="" />
      )}
      {badgeList.post_cnt >= 15 ? (
        <img className="w-1/3" src="/images/badgeImg/post_3.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.post_cnt >= 30 ? (
        <img className="w-1/3" src="/images/badgeImg/post_6.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.react_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/react_cnt_5.png" alt="" />
      )}
      {badgeList.react_cnt >= 10 ? (
        <img className="w-1/3" src="/images/badgeImg/react_cnt_10.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.react_cnt >= 20 ? (
        <img className="w-1/3" src="/images/badgeImg/react_cnt_20.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.report_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/report_cnt_5.png" alt="" />
      )}
      {badgeList.report_cnt >= 15 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/report_cnt_10.png"
          alt=""
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.report_cnt >= 30 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/report_cnt_20.png"
          alt=""
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
    </div>
  );
}

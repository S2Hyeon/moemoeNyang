import React, { useState, useEffect } from "react";
import { getUserBadge, putUpdateBadge } from "../../services/mypage";
// import { typedUseSelector } from "../../store";

export default function BadgeList({ badgeId, setBadgeId }) {
  const [badgeList, setBadgeList] = useState([]);

  useEffect(() => {
    console.log("badge list 불러오기");
    getUserBadge().then((res) => setBadgeList(res.data));
  }, []);

  useEffect(() => {
    if (!badgeList.length) return;
    console.log("badge list 불러오기");
    console.log(badgeList);
  }, [badgeList]);

  const badgeName = [
    { 1: "cat_regist_cnt_1" },
    { 2: "cat_regist_cnt_5" },
    { 3: "cat_regist_cnt_10" },
    { 4: "disease_1" },
    { 5: "disease_3" },
    { 6: "disease_6" },
    { 7: "feed_cnt_1" },
    { 8: "feed_cnt_10" },
    { 9: "feed_cnt_20" },
    { 10: "login_days_cnt_7" },
    { 11: "login_days_cnt_30" },
    { 12: "login_days_cnt_100" },
    { 13: "post_1" },
    { 14: "post_3" },
    { 15: "post_6" },
    { 16: "react_cnt_5" },
    { 17: "react_cnt_10" },
    { 18: "react_cnt_20" },
    { 19: "report_cnt_5" },
    { 20: "report_cnt_10" },
    { 21: "report_cnt_20" },
  ];

  function onBadgeClick(id) {
    console.log("click badgeId", badgeId);
    putUpdateBadge(id)
      .then(() => console.log("putUpdatebadge 완료"))
      .then(() => setBadgeId(id))
      .then(() => console.log("setBadgeId 완료"));
  }

  return (
    <div className="flex flex-wrap pl-8 pr-8">
      {badgeList.cat_regist_cnt === 0 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/nobadge.png"
          alt="nobadge"
        />
      ) : (
        <img
          className="w-1/3"
          src="/images/badgeImg/cat_regist_cnt_1.png"
          alt=""
          onClick={() => onBadgeClick(1)}
        />
      )}
      {badgeList.cat_regist_cnt >= 10 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/cat_regist_cnt_5.png"
          alt=""
          onClick={() => onBadgeClick(2)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.cat_regist_cnt >= 20 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/cat_regist_cnt_10.png"
          alt=""
          onClick={() => onBadgeClick(3)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.disease_regist_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img
          className="w-1/3"
          src="/images/badgeImg/disease_1.png"
          alt=""
          onClick={() => onBadgeClick(4)}
        />
      )}

      {badgeList.disease_regist_cnt >= 15 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/disease_3.png"
          alt=""
          onClick={() => onBadgeClick(5)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.disease_regist_cnt >= 30 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/disease_6.png"
          alt=""
          onClick={() => onBadgeClick(6)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.feed_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img
          className="w-1/3"
          src="/images/badgeImg/feed_cnt_1.png"
          alt=""
          onClick={() => onBadgeClick(7)}
        />
      )}
      {badgeList.feed_cnt >= 10 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/feed_cnt_10.png"
          alt=""
          onClick={() => onBadgeClick(8)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.feed_cnt >= 20 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/feed_cnt_20.png"
          alt=""
          onClick={() => onBadgeClick(9)}
        />
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
          onClick={() => onBadgeClick(10)}
        />
      )}
      {badgeList.login_days_cnt >= 7 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/login_days_cnt_30.png"
          alt=""
          onClick={() => onBadgeClick(11)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.login_days_cnt >= 100 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/login_days_cnt_100.png"
          alt=""
          onClick={() => onBadgeClick(12)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.post_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img
          className="w-1/3"
          src="/images/badgeImg/post_1.png"
          alt=""
          onClick={() => onBadgeClick(13)}
        />
      )}
      {badgeList.post_cnt >= 15 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/post_3.png"
          alt=""
          onClick={() => onBadgeClick(14)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.post_cnt >= 30 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/post_6.png"
          alt=""
          onClick={() => onBadgeClick(15)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.react_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img
          className="w-1/3"
          src="/images/badgeImg/react_cnt_5.png"
          alt=""
          onClick={() => onBadgeClick(16)}
        />
      )}
      {badgeList.react_cnt >= 10 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/react_cnt_10.png"
          alt=""
          onClick={() => onBadgeClick(17)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.react_cnt >= 20 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/react_cnt_20.png"
          alt=""
          onClick={() => onBadgeClick(18)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}

      {badgeList.report_cnt === 0 ? (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      ) : (
        <img
          className="w-1/3"
          src="/images/badgeImg/report_cnt_5.png"
          alt=""
          onClick={() => onBadgeClick(19)}
        />
      )}
      {badgeList.report_cnt >= 15 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/report_cnt_10.png"
          alt=""
          onClick={() => onBadgeClick(20)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.report_cnt >= 30 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/report_cnt_20.png"
          alt=""
          onClick={() => onBadgeClick(21)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { getUserBadge, putUserInfo } from "../../services/mypage";
import { typedUseSelector } from "../../store";

export default function BadgeList() {
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
    { 0: "cat_regist_cnt_1" },
    { 1: "cat_regist_cnt_5" },
    { 2: "cat_regist_cnt_10" },
    { 3: "disease_1" },
    { 4: "disease_3" },
    { 5: "disease_6" },
    { 6: "feed_cnt_1" },
    { 7: "feed_cnt_10" },
    { 8: "feed_cnt_20" },
    { 9: "login_days_cnt_7" },
    { 10: "login_days_cnt_30" },
    { 11: "login_days_cnt_100" },
    { 12: "post_1" },
    { 13: "post_3" },
    { 14: "post_6" },
    { 15: "react_cnt_5" },
    { 16: "react_cnt_10" },
    { 17: "react_cnt_20" },
    { 18: "report_cnt_5" },
    { 19: "report_cnt_10" },
    { 20: "report_cnt_20" },
  ];

  const member = typedUseSelector((state) => state.member.memberObject);
  function onBadgeClick(badgeId) {
    putUserInfo(badgeId, member.nickname, member.universityId);
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
          onClick={() => onBadgeClick(0)}
        />
      )}
      {badgeList.cat_regist_cnt >= 10 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/cat_regist_cnt_5.png"
          alt=""
          onClick={() => onBadgeClick(1)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.cat_regist_cnt >= 20 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/cat_regist_cnt_10.png"
          alt=""
          onClick={() => onBadgeClick(2)}
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
          onClick={() => onBadgeClick(3)}
        />
      )}

      {badgeList.disease_regist_cnt >= 15 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/disease_3.png"
          alt=""
          onClick={() => onBadgeClick(4)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.disease_regist_cnt >= 30 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/disease_6.png"
          alt=""
          onClick={() => onBadgeClick(5)}
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
          onClick={() => onBadgeClick(6)}
        />
      )}
      {badgeList.feed_cnt >= 10 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/feed_cnt_10.png"
          alt=""
          onClick={() => onBadgeClick(7)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.feed_cnt >= 20 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/feed_cnt_20.png"
          alt=""
          onClick={() => onBadgeClick(8)}
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
          onClick={() => onBadgeClick(9)}
        />
      )}
      {badgeList.login_days_cnt >= 7 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/login_days_cnt_30.png"
          alt=""
          onClick={() => onBadgeClick(10)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.login_days_cnt >= 100 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/login_days_cnt_100.png"
          alt=""
          onClick={() => onBadgeClick(11)}
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
          onClick={() => onBadgeClick(12)}
        />
      )}
      {badgeList.post_cnt >= 15 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/post_3.png"
          alt=""
          onClick={() => onBadgeClick(13)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.post_cnt >= 30 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/post_6.png"
          alt=""
          onClick={() => onBadgeClick(14)}
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
          onClick={() => onBadgeClick(15)}
        />
      )}
      {badgeList.react_cnt >= 10 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/react_cnt_10.png"
          alt=""
          onClick={() => onBadgeClick(16)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.react_cnt >= 20 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/react_cnt_20.png"
          alt=""
          onClick={() => onBadgeClick(17)}
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
          onClick={() => onBadgeClick(18)}
        />
      )}
      {badgeList.report_cnt >= 15 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/report_cnt_10.png"
          alt=""
          onClick={() => onBadgeClick(19)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
      {badgeList.report_cnt >= 30 ? (
        <img
          className="w-1/3"
          src="/images/badgeImg/report_cnt_20.png"
          alt=""
          onClick={() => onBadgeClick(20)}
        />
      ) : (
        <img className="w-1/3" src="/images/badgeImg/nobadge.png" alt="" />
      )}
    </div>
  );
}

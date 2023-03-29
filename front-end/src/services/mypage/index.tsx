import Api from "../../utils/customApi";

interface GetUserInfoResponse {
  status: number;
  data: {
    "nickname":String,
    "university_name":String
  };
}

export async function getUserInfo(
): Promise<GetUserInfoResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.get("/members");
    return response as GetUserInfoResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

interface PostUserInfoResponse {
  status: number;
  data: {
    "nickname":String,
    "university_id":Number,
    "password":String,
  };
}

export async function postUserInfo(
  nickname: string,
  university_id: number,
  password: string,
): Promise<PostUserInfoResponse | undefined> {
  try {
    const response = await Api.post("/members", {
      nickname,
      university_id,
      password,
    });
    return response as PostUserInfoResponse;
  } catch (error) {
    console.error(error);
  }
}

interface GetUserBadgeResponse {
  status: number;
  data: {
<<<<<<< HEAD
    "user_activitis":{
=======
    "user_activitis": {
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
      "feed_cnt":Number,
      "post_cnt":Number,
      "cat_regist_cnt":Number,
      "react_cnt":Number,
      "disease_regist_cnt":Number,
      "report_cnt":Number,
      "login_days_cnt":Number,
    }
  };
}

export async function getUserBadge(
): Promise<GetUserBadgeResponse | undefined> {
  try {
<<<<<<< HEAD
    const response = await Api.post("/members/badge");
=======
    const response = await Api.get("/members/badge");
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
    return response as GetUserBadgeResponse;
  } catch (error) {
    console.error(error);
  }
}

<<<<<<< HEAD
=======
interface GetFollowListResponse {
  status: number;
  data: {
    "cats":Array<
      {
        "cat_id":Number,
        "name":String,
        "age":Number,
        "gender":String,
        "follower_cnt":Number,
        "url":String,
      }>
  };
}

export async function getFollowList(
): Promise<GetFollowListResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.get("/members/follow-list");
    return response as GetFollowListResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21

const User = {
  getUserInfo, 
  postUserInfo,
  getUserBadge,
<<<<<<< HEAD
=======
  getFollowList,
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
};

export default User;

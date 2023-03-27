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
    "user_activitis":{
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
    const response = await Api.post("/members/badge");
    return response as GetUserBadgeResponse;
  } catch (error) {
    console.error(error);
  }
}


const User = {
  getUserInfo, 
  postUserInfo,
  getUserBadge,
};

export default User;

import Api from "../../utils/customApi";

interface GetUserInfoResponse {
  status: number;
  // data: {
  //   "nickname":String,
  //   "university_name":String
  // };
  data: {
    badge_id: number;
    email: string | null;
    member_id: string | null;
    nickname: string;
    university_id: number;
    university_name: string;
  };
}

export async function getUserInfo(): Promise<GetUserInfoResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.get("/members");
    return response as GetUserInfoResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {}
}

interface PutUserInfoResponse {
  status: number;
  data: {
    nickname: String;
    password: String;
    university_id: Number;
  };
}

export async function putUserInfo(
  nickname: String,
  password: String,
  university_id: Number,
): Promise<PutUserInfoResponse | undefined> {
  try {
    const response = await Api.put("/members", {
      nickname,
      password,
      university_id,
    });
    document.cookie = `accessToken=${response.data.token}`;
    return response as PutUserInfoResponse;
  } catch (error) {}
}

interface PutUpdateBadgeResponse {
  status: number;
  data: {
    badgeId: Number;
  };
}

export async function putUpdateBadge(
  badgeId: Number,
): Promise<PutUpdateBadgeResponse | undefined> {
  try {
    const response = await Api.put(`/members/badge?badgeId=${badgeId}`);
    return response as PutUpdateBadgeResponse;
  } catch (error) {}
}

interface GetUserBadgeResponse {
  status: number;
  data: {
    user_activitis: {
      feed_cnt: Number;
      post_cnt: Number;
      cat_regist_cnt: Number;
      react_cnt: Number;
      disease_regist_cnt: Number;
      report_cnt: Number;
      login_days_cnt: Number;
    };
  };
}

export async function getUserBadge(): Promise<
  GetUserBadgeResponse | undefined
> {
  try {
    const response = await Api.get("/members/badge");
    return response as GetUserBadgeResponse;
  } catch (error) {}
}

interface GetFollowListResponse {
  status: number;
  data: {
    cats: Array<{
      cat_id: Number;
      name: String;
      age: Number;
      gender: String;
      follower_cnt: Number;
      image: String;
      is_following: null | Number;
    }>;
  };
}

export async function getFollowList(): Promise<
  GetFollowListResponse | undefined
> {
  try {
    const response = await Api.get("/members/follow-list");
    return response as GetFollowListResponse;
  } catch (error) {
    console.error(error);
  }
}

const User = {
  getUserInfo,
  putUserInfo,
  getUserBadge,
  getFollowList,
  putUpdateBadge,
};

export default User;

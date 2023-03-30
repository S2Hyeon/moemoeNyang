import Api from "../../utils/customApi";
import { setCookie } from "../../utils/handleCookies";

interface LoginResponse {
  status: number;
  data: {
    token: string;
    msg: string;
    // access_token: string;
    // university_id: number;
    // nickname: string;
    // email: string;
  };
}

export async function postLogin(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  email: string,
  password: string,
): Promise<LoginResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = (await Api.post("/auth/login", {
      email,
      password,
    })) as LoginResponse;
    const { token: accessToken } = response.data;
    setCookie("accessToken", accessToken, 3);
    return response as LoginResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    console.error(error);
  }
}

interface PostSignupResponse {
  status: number;
  data: {
    msg: string;
  };
}

export async function postSignup(
  email: string,
  password: string,
  nickname: string,
  university_id: number,
): Promise<PostSignupResponse | undefined> {
  try {
    const response = await Api.post("/auth/sign-up", {
      email,
      password,
      nickname,
      university_id,
    });
    return response as PostSignupResponse;
  } catch (error) {
    console.error(error);
  }
}

interface CheckEmailResponse {
  status: number;
  data: {
    msg: "Y" | "N";
  };
}

export async function getCheckEmail(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  email: string,
): Promise<CheckEmailResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.get(`/auth/check-email?email=${email}`);
    return response as CheckEmailResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    console.error(error);
  }
}

export interface University {
  universityId: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

interface GetSearchUnivsResponse {
  status: number;
  data: Array<University>;
}

export async function getSearchUnivs(
  keyword: string,
): Promise<GetSearchUnivsResponse> {
  try {
    const response = await Api.get(`/univs/${keyword}`);
    return response as GetSearchUnivsResponse;
  } catch (error) {
    console.error(error);
  }
}

interface FindPasswordResponse {
  status: number;
  data: { msg: string };
}
export async function postFindPassword(
  email: string,
): Promise<FindPasswordResponse> {
  try {
    const response = await Api.post(`/auth/find-pwd`, { email });
    return response as FindPasswordResponse;
  } catch (error) {
    console.error(error);
  }
}

const Member = {
  postLogin,
  postSignup,
  getCheckEmail,
  getSearchUnivs,
};

export default Member;

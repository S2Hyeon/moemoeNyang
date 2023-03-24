import { ApiMock } from "../../utils/customApi";

interface LoginResponse {
  status: number;
  data: {
    access_token: String;
    nickname: String;
    email: String;
  };
}

export async function postLogin(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  email: String,
  password: String,
): Promise<LoginResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await ApiMock.post("/auth/login", { email, password });
    return response as LoginResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    console.error(error);
  }
}

interface PostSignupResponse {
  status: number;
  data: {
    msg: String;
  };
}

export async function postSignup(
  email: String,
  password: String,
  nickname: String,
  university_id: Number,
): Promise<PostSignupResponse | undefined> {
  try {
    const response = await ApiMock.post("/auth/sign-up", {
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

const Member = {
  postLogin,
  postSignup,
};

export default Member;

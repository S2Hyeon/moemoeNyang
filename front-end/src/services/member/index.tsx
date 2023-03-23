import { ApiMock } from "../../utils/customApi";

export async function postLogin(email, password) {
  try {
    const response = await ApiMock.post("/auth/login", { email, password });
    return response;
  } catch (error) {
    console.error(error);
  }
}

interface PostSignupResponse {
  msg: String;
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

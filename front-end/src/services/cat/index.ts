import { ApiMock } from "../../utils/customApi"; //목업 API를 불러옴
// import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

//응답 객체의 타입을 정의한다. API 명세서의 Response 부분 참고
interface CatResponse {
  status: number;
  data: {
    cat_id: Number;
    name: String;
    age: Number;
    gender: String;
    follower_cnt: Number;
    image: String;
  };
}

export async function getCatlist(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  name: String,
  age: Number,
  gender: String,
): Promise<CatResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await ApiMock.get("/catlist", { name, age, gender });
    return response as CatResponse;
  } catch (error) {}
}

const Catlist = {
  getCatlist,
};

export default Catlist;

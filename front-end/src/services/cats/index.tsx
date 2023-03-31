// import { ApiMock } from "../../utils/customApi"; //목업 API를 불러옴
import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

/* --------타입스크립트를 사용하는 경우-------- */

//응답 객체의 타입을 정의한다. API 명세서의 Response 부분 참고
interface CatListResponse {
  status: number;
  data: {
    cats: Array<{
      cat_id: Number;
      name: String;
      age: Number;
      gender: String;
      follower_cnt: Number;
      image: String;
    }>;
  };
}

export async function getCatList(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  universityId: Number,
): Promise<CatListResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.get(`/cats?universityId=${universityId}`);
    // console.log(JSON.stringify(response))
    return response as CatListResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

const Cats = {
  getCatList,
};

export default Cats;

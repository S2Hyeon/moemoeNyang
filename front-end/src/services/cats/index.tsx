// import { ApiMock } from "../../utils/customApi"; //목업 API를 불러옴
import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

/* --------타입스크립트를 사용하는 경우-------- */

//응답 객체의 타입을 정의한다. API 명세서의 Response 부분 참고
interface CatListResponse {
	status: number
	data : {
    "cats":Array<{
      "cat_id":Number,
      "name":String,
      "age":Number,
      "gender":String,
      "follower_cnt":Number,
      "image":String,
      "is_following":Number // 숫자이면 팔로잉중, null이면 팔로잉중이 아님
    }>
	}
}

export async function getCatList(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  universityId: Number,
): Promise<CatListResponse | undefined> { //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    universityId = 1
    const response = await Api.get(`/cats?universityId=${universityId}`);
    // console.log(JSON.stringify(response))
    return response as CatListResponse;    //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

interface GetCatDetailResponse {
	status: number
	data : {
    cat_id:Number,
    name:String,
    age:Number,
    gender:String,
    follower_cnt:Number,
    image:String,
    lat:Number,
    lng:Number
  }
}

export async function getCatDetail(
  catId: Number,
): Promise<GetCatDetailResponse | undefined> { //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.get(`/catlist/${catId}`);
    console.log("get cat detail info");
    console.log(JSON.stringify(response));
    return response as GetCatDetailResponse;    //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

interface GetCatImagesResponse {
	status: number
	data : {
    "boards":Array<      {
      "boardId":Number,
      "image":String
    }>
	}
}

export async function getCatImages(
  catId: Number,
): Promise<GetCatImagesResponse | undefined> { //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.get(`/cats/${catId}/boards`);
    return response as GetCatImagesResponse;    //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

const Cats = {
  getCatList,
  getCatDetail,
  getCatImages,
};

export default Cats;

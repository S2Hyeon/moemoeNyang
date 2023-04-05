// import { ApiMock } from "../../utils/customApi"; //목업 API를 불러옴
import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

Api.defaults.headers.post["Content-Type"] = "multipart/form-data";

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

interface GetCatDetailResponse {
  status: number;
  data: {
    cat_id: Number;
    name: String;
    age: Number;
    gender: String;
    follower_cnt: Number;
    image: String;
    lat: Number;
    lng: Number;
  };
}


export async function getCatDetail(
  catId: Number,
  ): Promise<GetCatDetailResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.get(`/cats/${catId}`);
    return response as GetCatDetailResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

interface GetCatImagesResponse {
  status: number;
  data: {
    boards: Array<{
      boardId: Number;
      image: String;
    }>;
  };
}

export async function getCatImages(
  catId: Number,
  ): Promise<GetCatImagesResponse | undefined> {
    //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
    try {
      const response = await Api.get(`/cats/${catId}/boards`);
      return response as GetCatImagesResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
    } catch (error) {
      // console.error(error);
    }
  }
  
  Api.defaults.headers.post["Content-Type"] = "multipart/form-data";

  interface PostCatRegistResponse {
    status: Number;
    data: {
      universityId: Number;
      name: String;
      age: Number;
      gender: "M" | "F";
      image: String; // <<< 이부분 게시글이랑 같은거
      lat: Number; // 고양이 등록시 이미지의 메타데이터를 이용해 첫 게시글 작성
      lng: Number;
  };
  // header: { "Content-Type": "multipart/form-data", };
}

export async function postCatRegist(
  universityId: Number,
  name: String,
  age: Number,
  gender: "M" | "F",
  image: String,
  lat: Number,
  lng: Number,
  ): Promise<PostCatRegistResponse | undefined> {
    try {
      const response = await Api.post("/cat", {
        universityId,
        name,
        age,
        gender,
        image,
        lat,
        lng,
      });
      return response as PostCatRegistResponse;
  } catch (error) {
    console.error(error);
  }
}

interface PostCatFollowResponse {
  status: Number;
  data: {
    "cat_id": Number,
  };
}

export async function postCatFollow(
  cat_id: Number
): Promise<PostCatFollowResponse | undefined> {
  try {
    console.log(cat_id)
    const response = await Api.post("/cats/follow", { cat_id });
    return response as PostCatFollowResponse;
  } catch (error) {
    console.error(error);
  }
}

interface DeleteCatFollowResponse {
  status: Number;
  data: {
    "cat_id": Number,
  };
}

export async function deleteCatFollow(
  catId: Number
): Promise<DeleteCatFollowResponse | undefined> {
  try {
    const response = await Api.delete(`/cats/follow/${catId}`);
    return response as DeleteCatFollowResponse;
  } catch (error) {
    console.error(error);
  }
}

const Cats = {
  getCatList,
  getCatDetail,
  getCatImages,
  postCatRegist,
  postCatFollow,
  deleteCatFollow,
};

export default Cats;

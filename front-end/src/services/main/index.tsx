import { PostType } from "../../store/mapSlice";
import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

/* --------타입스크립트를 사용하는 경우-------- */
//응답 객체의 타입을 정의한다. API 명세서의 Response 부분 참고

/* 객체 재정의 
interface PostListResponse {
  status: number;
  data: {
    boards: Array<{
      board_id: Number;
      cat: {
        cat_id: Number;
        image: String;
        name: Number;
      };
      member: {
        image: String;
        nickname: String;
      };
      image: Number;
      tags: [
        {
          name: String;
          rate: Number;
        },
      ];
      emotions: {
        recommand: Number;
        good: Number;
        impressed: Number;
        sad: Number;
        angry: Number;
      };
      myEmotion: String;
      content: String;
      created_at: String;
    }>;
  };
}
*/
interface GetBoardListResponse {
  status: number;
  data: {
    content: Array<PostType>;
    pageable: {
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      pageSize: number;
      pageNumber: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    numberOfElements: number;
    first: boolean;
    empty: false;
  };
}

export async function getMainBoardList(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  universityId: Number,
  tagName: String,
  page: Number,
): Promise<GetBoardListResponse | undefined> { //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    universityId = 1
    page=1
    const response = await Api.get(`/boards?universityId=${universityId}&tagName=${tagName}&page=${page}`);
    return response as GetBoardListResponse;    //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

interface PatchEmotionResponse {
  status: number;
  data: {
    boardId: Number;
    emotion: String;
  };
}

export async function patchEmotion(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  boardId: Number,
  emotion: String,
): Promise<PatchEmotionResponse | undefined> { //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.patch("/boards/emotion", {boardId, emotion});
    return response as PatchEmotionResponse;    //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

interface DeleteEmotionResponse {
  status: number;
  data: {};
}

export async function deleteEmotion(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  boardId: number,
): Promise<DeleteEmotionResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.delete(`/boards/emotion/${boardId}`);
    return response as DeleteEmotionResponse;    //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

interface PostFollowResponse {
  status: number;
  data: {
		"catId": Number,
  };
}

export async function postFollow(
  // 함수의 파라미터로 받을 값의 타입을 정의함
	catId : number,
): Promise<PostFollowResponse | undefined> { //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.post(`/cats/follow`, { catId });
    return response as PostFollowResponse;   
  } catch (error) {
    // console.error(error);
  }
}

interface DeleteUnFollowResponse {
  status: number;
  data: {
		"catId": Number,
  };
}

export async function deleteUnFollow(
  // 함수의 파라미터로 받을 값의 타입을 정의함
	catId : number,
): Promise<DeleteUnFollowResponse | undefined> { //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.delete(`/cats/follow/${catId}`);
    return response as DeleteUnFollowResponse;    //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

const Main = {
  getMainBoardList,
	patchEmotion,
	postFollow,
	deleteUnFollow,
};

export default Main;

import { PostType } from "../../store/mapSlice";
import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

/* --------타입스크립트를 사용하는 경우-------- */
//응답 객체의 타입을 정의한다. API 명세서의 Response 부분 참고

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
): Promise<GetBoardListResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    universityId = 1;
    page = 1;
    const response = await Api.get(`/boards?universityId=${universityId}`);
    // const response = await Api.get(`/boards?universityId=${universityId}&tagName=${tagName}&page=${page}`);
    return response as GetBoardListResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

interface PostFollowResponse {
  status: number;
  data: {
    catId: Number;
  };
}

export async function postFollow(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  catId: number,
): Promise<PostFollowResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
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
    catId: Number;
  };
}

export async function deleteUnFollow(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  catId: number,
): Promise<DeleteUnFollowResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    console.log("unfollow ", catId)
    const response = await Api.delete(`/cats/follow/${catId}`);
    return response as DeleteUnFollowResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}


interface PatchEmojiResponse {
  status: number;
  data: {
    board_id: Number,
    emotion: String,
  };
}

export async function patchEmoji(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  board_id: number,
  emotion: String,
): Promise<PatchEmojiResponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    console.log(board_id, " --- ", emotion)
    const response = await Api.patch(`/boards/emotion`, { board_id, emotion });
    console.log("patch emoji result", response)
    return response as PatchEmojiResponse;
  } catch (error) {
    // console.error(error);
  }
}

interface DeleteEmojiesponse {
  status: number;
  data: {
    board_id: any | Number,
    emotion: string,
  };
}

export async function deleteEmoji(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  board_id: any | Number,
  emotion: string,
): Promise<DeleteEmojiesponse | undefined> {
  //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    console.log(board_id, "----", emotion)
    const response = await Api.delete("/boards/emotion",{board_id, emotion });
    return response as DeleteEmojiesponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}


const Main = {
  getMainBoardList,
  postFollow,
  deleteUnFollow,
  patchEmoji,
  deleteEmoji,
};

export default Main;

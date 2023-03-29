import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

/* --------타입스크립트를 사용하는 경우-------- */
//응답 객체의 타입을 정의한다. API 명세서의 Response 부분 참고
interface PostListResponse {
	status: number
	data : {
    "boards":Array<{
			"board_id":Number
			"cat" : {
				"cat_id" : Number
				"image" : String
				"name" : Number
			}
			"member" : {
				"image" : String
				"nickname" : String
			}
			"image": Number
			"tags" : [
				{
					"name" : String
					"rate" : Number
				}
			]
			"emotions" : {
				"recommand" : Number
				"good" : Number
				"impressed" : Number
				"sad" : Number
				"angry" : Number
			}
			"myEmotion" : String
			"content" : String
			"created_at" : String
		}>
	}
}

export async function getMainPostList(
  // 함수의 파라미터로 받을 값의 타입을 정의함
  universityId: Number,
  tagName: String,
): Promise<PostListResponse | undefined> { //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.get("/boards?universityId=1&tagName=''");
    // console.log(JSON.stringify(response))
    return response as PostListResponse;    //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}



interface PatchEmotionResponse {
  status: number;
  data: {
		"boardId" : Number,
		"emotion" : String,
  };
}

export async function patchEmotion(
  // 함수의 파라미터로 받을 값의 타입을 정의함
): Promise<PatchEmotionResponse | undefined> { //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.patch("/boards/emotion");
    return response as PatchEmotionResponse;    //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

interface DeleteEmotionResponse {
  status: number;
  data: {
  };
}

export async function deleteEmotion(
  // 함수의 파라미터로 받을 값의 타입을 정의함
	boardId : number,
): Promise<DeleteEmotionResponse | undefined> { //함수가 리턴하는 값의 타입을 정의함. Promise<> 안에 위에서 정의한 응답객체 타입을 넣어주면 됨. 에러인 경우에는 undefined가 반환되므로 Promise<LoginResponse | undefined>
  try {
    const response = await Api.delete(`/boards/emotion/${boardId}`);
    return response as DeleteEmotionResponse;    //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.error(error);
  }
}

const Main = {
  getMainPostList,
	patchEmotion,
};

export default Main;

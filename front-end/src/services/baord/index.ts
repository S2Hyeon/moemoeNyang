import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

interface PostBoardResponse {
  status: Number;
  data: {
    // cat_id:Number,
    // university_id: Number,
    // lat: Number,
    file:FormData,
    // lng: Number,
  };
}

export async function postBoard(
  boardData:FormData,
): Promise<PostBoardResponse | undefined> {
  try {
    // if(cat_id === null || university_id === null || lng === null || content === null || file === null || lat === null ||
    //   cat_id === undefined || university_id === undefined || lng === undefined || content === undefined || file === undefined || lat === undefined ) {
    //   return;
    // }
    console.log("post ----------");
    console.log(boardData.get("catId"))
    console.log(boardData.get("image"))
    boardData.forEach((e,key)=>console.log(key, e))
    const response = await Api.post("/boards", boardData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      });
    console.log("게시물 등록 완료", response)
    return response as PostBoardResponse;
  } catch (error) {
    console.error(error);
  }
}

const Baord = {
  postBoard,
};

export default Baord;

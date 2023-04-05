import { FeedType } from "../../store/mapSlice";
import Api, { ApiMock } from "../../utils/customApi";

interface FeedsListResponse {
  status: 200;
  data: Array<FeedType>;
}

export async function getFeedsList(
  universityId: number,
): Promise<FeedsListResponse | undefined> {
  try {
    const response = (await Api.get(
      `/feedspots?universityId=${universityId}`,
    )) as FeedsListResponse;
    return response as FeedsListResponse; //마지막으로 응답객체 response에 타입을 덮어씌워줌
  } catch (error) {
    // console.log('에러',error);
  }
}

export async function getFeedLog(feedspotId: number) {
  const response = (await Api.get(`/feedspots/${feedspotId}`)) as Array<{
    member_id: number;
    nickname: string;
    created_at: Date;
  }>;
  return response;
}

export async function postFeed(feedspotId: number) {
  const response = (await Api.post(`/feedspots/${feedspotId}`)) as {
    data: { msg: string };
  };
  return response;
}

const MapService = { getFeedsList, getFeedLog, postFeed };
export default MapService;

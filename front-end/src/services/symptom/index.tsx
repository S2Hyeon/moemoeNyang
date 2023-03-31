import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때


interface GetDiseaseResponse {
  status: number;
  data: {
    "disease_id":Number,
    "name":String,
    "explanation":String,
    "url":String,
  };
}

export async function getDisease(
): Promise<GetDiseaseResponse | undefined> {
  try {
    const response = await Api.get("/cats/12/disease");
    return response as GetDiseaseResponse;
  } catch (error) {
    console.error(error);
  }
}

interface GetDiseaseListResponse {
  status: number;
  data: {
    "diseases":Array<
    {
      "disease_timeline_id":Number,
      "member_id":Number,
      "nickname":String,
      "image":String,
      "created_at":String,
      "disease":{
        "disease_id":Number,
        "name":String,
        "explanation":String,
        "url":String,
      }
    }>
  };
}

export async function getDiseaseList(
): Promise<GetDiseaseListResponse | undefined> {
  try {
    const response = await Api.get("/cats/4/diseases");
    return response as GetDiseaseListResponse;
  } catch (error) {
    console.error(error);
  }
}


const Symptom = {
  getDisease,
  getDiseaseList,
};

export default Symptom;

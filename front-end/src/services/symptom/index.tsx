import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

interface GetDiseaseResponse {
  status: number;
  data: {
    "diseases":Array<{
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

export async function getDiseases(
  catId : Number,
): Promise<GetDiseaseResponse | undefined> {
  try {
    const response = await Api.get(`/cats/${catId}/disease`);
    return response as GetDiseaseResponse;
  } catch (error) {
    console.error(error);
  }
}


const Symptom = {
  getDiseases,
};

export default Symptom;

import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

<<<<<<< HEAD

interface GetDiseaseResponse {
  status: number;
  data: {
    "disease_id":Number,
    "name":String,
    "explanation":String,
    "url":String,
  };
}

export async function getDeisease(
): Promise<GetDiseaseResponse | undefined> {
  try {
    const response = await Api.get("/cats/12/disease");
=======
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
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
    return response as GetDiseaseResponse;
  } catch (error) {
    console.error(error);
  }
}

<<<<<<< HEAD
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

export async function getDeiseaseList(
): Promise<GetDiseaseListResponse | undefined> {
  try {
    const response = await Api.get("/cats/4/diseases");
    return response as GetDiseaseListResponse;
  } catch (error) {
    console.error(error);
  }
}


const Symptom = {
  getDeisease,
  getDeiseaseList,
=======

const Symptom = {
  getDiseases,
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
};

export default Symptom;

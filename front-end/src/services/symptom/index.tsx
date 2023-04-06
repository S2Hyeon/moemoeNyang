import Api from "../../utils/customApi"; // 목업 API가 아닌 찐 API 쓸 때

// Api.defaults.headers.post["Content-Type"] = "multipart/form-data";

interface GetDiseaseResponse {
  status: number;
  data: {
    diseases: Array<{
      disease_timeline_id: Number;
      member_id: Number;
      nickname: String;
      image: FormData;
      created_at: Date;
      disease: {
        disease_id: Number;
        name: String;
        explanation: String;
        url: String;
      };
    }>;
  };
}

export async function getDisease(
  catId: Number,
): Promise<GetDiseaseResponse | undefined> {
  try {
    const response = await Api.get(`/cats/${catId}/diseases`);
    // const encodedBase64string = btoa(image);
    // const decodedString = atob(Image);
    return response as GetDiseaseResponse;
  } catch (error) {}
}

interface GetDiseaseListResponse {
  status: number;
  data: {
    diseases: Array<{
      disease_timeline_id: Number;
      member_id: Number;
      nickname: String;
      image: String;
      created_at: String;
      disease: {
        disease_id: Number;
        name: String;
        explanation: String;
        url: String;
      };
    }>;
  };
}

export async function getDiseaseList(): Promise<
  GetDiseaseListResponse | undefined
> {
  try {
    const response = await Api.get("/cats/4/diseases");
    return response as GetDiseaseListResponse;
  } catch (error) {}
}

interface PostDiseaseResponse {
  status: number;
  data: {
    disease_id: Number;
    image: String;
  };
  // header: { "Content-Type": "multipart/form-data", };
}

// Api.defaults.headers.post["Content-Type"] = "multipart/form-data";
export async function postDisease(
  catId,
  formData: FormData,
): Promise<PostDiseaseResponse | undefined> {
  try {
    const response = await Api.post(`/cats/${catId}/disease`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response as PostDiseaseResponse;
  } catch (error) {}
}

export async function postDiseaseRes(formData) {
  const response = await Api.post("/cats/disease", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
}

const Symptom = {
  getDisease,
  getDiseaseList,
  postDisease,
  postDiseaseRes,
};

export default Symptom;

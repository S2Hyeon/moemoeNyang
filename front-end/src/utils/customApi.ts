import axios from "axios";
import MockupService from "./MockupService";
import getHeaders from "./getHeaders";
import { getCookie } from "./handleCookies";

export const ApiMock = MockupService;

const Api = axios;

// Api.defaults.baseURL = "http://localhost:8081/api";
Api.defaults.baseURL = "http://j8a801.p.ssafy.io:8081/api";
Api.defaults.withCredentials = true;

Api.interceptors.request.use(
  (config) => {
    const { Authorization } = getHeaders();
    config.headers.Authorization = Authorization;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response.status;
    if (status < 400 || status > 500) alert("알 수 없는 오류가 발생했습니다");
    else if (status === 500) alert("서버에서 오류가 발생했습니다");
    if (error.response && error.response.data)
      return Promise.reject(error.response.data);
    else return Promise.reject(error.message);
  },
);
export default Api;

import { getCookie } from "./handleCookies";

//쿠키에서 엑세스 토큰을 가져옵니다.
const getHeaders = () => {
  const accessToken = getCookie("accessToken");
  const headers = { Authorization: `Bearer ${accessToken ? accessToken : ""}` };
  return headers;
};

export default getHeaders;

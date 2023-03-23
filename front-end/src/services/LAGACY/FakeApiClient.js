import axios from "axios";

export default class FakeApiClient {
  async boardList() {
    return axios.get(`/mockdata/board.json`);
  }
}

import axios from "axios";

export default class FakeApi {
  // constructor() {}

  async board(keyword) {
    return keyword ? this.#getBoardList() : "real Api";
  }

  async #getBoardList() {
    return axios
      .get("./mockdata/board.json")
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id })));
  }
}

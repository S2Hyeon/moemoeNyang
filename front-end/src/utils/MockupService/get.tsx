const get = (urls: string, ...rest): Object => {
  const [url, query] = urls.split("?");

  let res = {
    status: 200,
    data: {},
  };
  let err = {
    status: 0,
    data: {
      msg: "",
    },
  };

  switch (url) {
    case "/auth/check-email":
      res.data = {
        msg: "N",
      };
      break;

    case "/univs":
      res.data = {
        universities: [
          {
            university_id: 1,
            name: "서울대학교",
            address: "서울특별시 관악구 관악로 1",
          },
          {
            university_id: 0,
            name: "인하대학교",
            address: "인천광역시 미추홀구 인하로 100",
          },
        ],
      };
      break;



    default:
      break;
  }

  if (err.status) return Promise.reject(err);
  return Promise.resolve(res);
};

export default get;

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
        msg: "Y",
      };
      break;

    case url.startsWith("/univs") ? url : "없는케이스":
      res.data = {
        universities: [
          {
            university_id: 0,
            name: "인하대학교",
            address: "인천광역시 미추홀구 인하로 100",
          },
          {
            university_id: 1,
            name: "서울대학교",
            address: "서울특별시 관악구 관악로 1",
          },
          {
            university_id: 2,
            name: "북서울대학교",
            address: "서울특별시 북관악구 관악로 1",
          },
          {
            university_id: 3,
            name: "동서울대학교",
            address: "서울특별시 동관악구 관악로 1",
          },
          {
            university_id: 4,
            name: "남서울대학교",
            address: "서울특별시 남관악구 관악로 1",
          },
          {
            university_id: 5,
            name: "서서울대학교",
            address: "서울특별시 서관악구 관악로 1",
          },
          {
            university_id: 6,
            name: "북북서울대학교",
            address: "서울특별시 북북관악구 관악로 1",
          },
          {
            university_id: 7,
            name: "동동서울대학교",
            address: "서울특별시 동동관악구 관악로 1",
          },
          {
            university_id: 8,
            name: "남남서울대학교",
            address: "서울특별시 남남관악구 관악로 1",
          },
          {
            university_id: 9,
            name: "서서서울대학교",
            address: "서울특별시 서서관악구 관악로 1",
          },
        ],
      };
      break;

    case "/cat":
      res.data = {
        cat_id: 1,
        name: "또롱이",
        age: 1,
        gender: "male",
        follower_cnt: "3",
        image: "image",
      };

    case url.startsWith("/boards") ? url : "없는케이스":
      res.data = [
        {
          board_id: 1,
          university_id: 1,
          cat: {
            cat_id: 1,
            name: "피곤냥이",
            age: 0,
            gender: null,
            follower_cnt: 0,
            image: "https://i.ibb.co/9q6ZT22/image.jpg",
            lat: 0.0,
            lng: 0.0,
          },
          member: {
            member_id: "d203f6fd-3e0d-4572-84b8-6ea4d0b241cf",
            university_id: 0,
            university_name: null,
            reward_id: 1,
            email: null,
            nickname: "노찌노찌",
          },
          tags: [
            {
              tag_id: 1,
              board_id: 0,
              name: "기지개 켜기",
              rate: 85.5,
            },
            {
              tag_id: 2,
              board_id: 0,
              name: "식빵 굽기",
              rate: 14.4,
            },
            {
              tag_id: 3,
              board_id: 0,
              name: "앉기",
              rate: 0.1,
            },
          ],
          lat: 37.501258,
          lng: 127.039516,
          content:
            "이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.",
          image: "https://i.ibb.co/9q6ZT22/image.jpg",
          created_at: [2023, 3, 31, 13, 36, 32, 107341600],
          recommend: 29,
          good: 41,
          impressed: 41,
          sad: 16,
          angry: 18,
        },
        {
          board_id: 2,
          university_id: 1,
          cat: {
            cat_id: 1,
            name: "피곤냥이",
            age: 0,
            gender: null,
            follower_cnt: 0,
            image: "https://i.ibb.co/9q6ZT22/image.jpg",
            lat: 0.0,
            lng: 0.0,
          },
          member: {
            member_id: "5c8796d7-2736-4251-bafc-6a9652afbe6e",
            university_id: 0,
            university_name: null,
            reward_id: 1,
            email: null,
            nickname: "노찌노찌",
          },
          tags: [
            {
              tag_id: 1,
              board_id: 0,
              name: "기지개 켜기",
              rate: 85.5,
            },
            {
              tag_id: 2,
              board_id: 0,
              name: "식빵 굽기",
              rate: 14.4,
            },
            {
              tag_id: 3,
              board_id: 0,
              name: "앉기",
              rate: 0.1,
            },
          ],
          lat: 37.501258,
          lng: 127.039516,
          content:
            "이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.",
          image: "https://i.ibb.co/9q6ZT22/image.jpg",
          created_at: [2023, 3, 31, 13, 36, 32, 109334900],
          recommend: 44,
          good: 39,
          impressed: 46,
          sad: 49,
          angry: 42,
        },
        {
          board_id: 3,
          university_id: 1,
          cat: {
            cat_id: 1,
            name: "피곤냥이",
            age: 0,
            gender: null,
            follower_cnt: 0,
            image: "https://i.ibb.co/9q6ZT22/image.jpg",
            lat: 0.0,
            lng: 0.0,
          },
          member: {
            member_id: "12f17783-8b13-455c-88d1-4d6fa5e048f5",
            university_id: 0,
            university_name: null,
            reward_id: 1,
            email: null,
            nickname: "노찌노찌",
          },
          tags: [
            {
              tag_id: 1,
              board_id: 0,
              name: "기지개 켜기",
              rate: 85.5,
            },
            {
              tag_id: 2,
              board_id: 0,
              name: "식빵 굽기",
              rate: 14.4,
            },
            {
              tag_id: 3,
              board_id: 0,
              name: "앉기",
              rate: 0.1,
            },
          ],
          lat: 37.501258,
          lng: 127.039516,
          content:
            "이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.",
          image: "https://i.ibb.co/9q6ZT22/image.jpg",
          created_at: [2023, 3, 31, 13, 36, 32, 109334900],
          recommend: 28,
          good: 20,
          impressed: 14,
          sad: 37,
          angry: 11,
        },
        {
          board_id: 4,
          university_id: 1,
          cat: {
            cat_id: 1,
            name: "피곤냥이",
            age: 0,
            gender: null,
            follower_cnt: 0,
            image: "https://i.ibb.co/9q6ZT22/image.jpg",
            lat: 0.0,
            lng: 0.0,
          },
          member: {
            member_id: "78495c4f-876f-42d9-b465-c2aa47f64560",
            university_id: 0,
            university_name: null,
            reward_id: 1,
            email: null,
            nickname: "노찌노찌",
          },
          tags: [
            {
              tag_id: 1,
              board_id: 0,
              name: "기지개 켜기",
              rate: 85.5,
            },
            {
              tag_id: 2,
              board_id: 0,
              name: "식빵 굽기",
              rate: 14.4,
            },
            {
              tag_id: 3,
              board_id: 0,
              name: "앉기",
              rate: 0.1,
            },
          ],
          lat: 37.501258,
          lng: 127.039516,
          content:
            "이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.",
          image: "https://i.ibb.co/9q6ZT22/image.jpg",
          created_at: [2023, 3, 31, 13, 36, 32, 109334900],
          recommend: 13,
          good: 14,
          impressed: 43,
          sad: 49,
          angry: 45,
        },
        {
          board_id: 5,
          university_id: 1,
          cat: {
            cat_id: 1,
            name: "피곤냥이",
            age: 0,
            gender: null,
            follower_cnt: 0,
            image: "https://i.ibb.co/9q6ZT22/image.jpg",
            lat: 0.0,
            lng: 0.0,
          },
          member: {
            member_id: "bf583b6d-6e15-46da-9834-7b1db90a25da",
            university_id: 0,
            university_name: null,
            reward_id: 1,
            email: null,
            nickname: "노찌노찌",
          },
          tags: [
            {
              tag_id: 1,
              board_id: 0,
              name: "기지개 켜기",
              rate: 85.5,
            },
            {
              tag_id: 2,
              board_id: 0,
              name: "식빵 굽기",
              rate: 14.4,
            },
            {
              tag_id: 3,
              board_id: 0,
              name: "앉기",
              rate: 0.1,
            },
          ],
          lat: 37.501258,
          lng: 127.039516,
          content:
            "이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.",
          image: "https://i.ibb.co/9q6ZT22/image.jpg",
          created_at: [2023, 3, 31, 13, 36, 32, 109334900],
          recommend: 41,
          good: 27,
          impressed: 14,
          sad: 33,
          angry: 44,
        },
        {
          board_id: 6,
          university_id: 1,
          cat: {
            cat_id: 1,
            name: "피곤냥이",
            age: 0,
            gender: null,
            follower_cnt: 0,
            image: "https://i.ibb.co/9q6ZT22/image.jpg",
            lat: 0.0,
            lng: 0.0,
          },
          member: {
            member_id: "803c33af-b97e-4f69-ae91-c9743ff55f58",
            university_id: 0,
            university_name: null,
            reward_id: 1,
            email: null,
            nickname: "노찌노찌",
          },
          tags: [
            {
              tag_id: 1,
              board_id: 0,
              name: "기지개 켜기",
              rate: 85.5,
            },
            {
              tag_id: 2,
              board_id: 0,
              name: "식빵 굽기",
              rate: 14.4,
            },
            {
              tag_id: 3,
              board_id: 0,
              name: "앉기",
              rate: 0.1,
            },
          ],
          lat: 37.501258,
          lng: 127.039516,
          content:
            "이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.",
          image: "https://i.ibb.co/9q6ZT22/image.jpg",
          created_at: [2023, 3, 31, 13, 36, 32, 109334900],
          recommend: 27,
          good: 8,
          impressed: 37,
          sad: 26,
          angry: 36,
        },
        {
          board_id: 7,
          university_id: 1,
          cat: {
            cat_id: 1,
            name: "피곤냥이",
            age: 0,
            gender: null,
            follower_cnt: 0,
            image: "https://i.ibb.co/9q6ZT22/image.jpg",
            lat: 0.0,
            lng: 0.0,
          },
          member: {
            member_id: "15862ff5-e5ee-4e29-a82f-b73a96995556",
            university_id: 0,
            university_name: null,
            reward_id: 1,
            email: null,
            nickname: "노찌노찌",
          },
          tags: [
            {
              tag_id: 1,
              board_id: 0,
              name: "기지개 켜기",
              rate: 85.5,
            },
            {
              tag_id: 2,
              board_id: 0,
              name: "식빵 굽기",
              rate: 14.4,
            },
            {
              tag_id: 3,
              board_id: 0,
              name: "앉기",
              rate: 0.1,
            },
          ],
          lat: 37.501258,
          lng: 127.039516,
          content:
            "이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.",
          image: "https://i.ibb.co/9q6ZT22/image.jpg",
          created_at: [2023, 3, 31, 13, 36, 32, 109334900],
          recommend: 36,
          good: 35,
          impressed: 8,
          sad: 38,
          angry: 20,
        },
        {
          board_id: 8,
          university_id: 1,
          cat: {
            cat_id: 1,
            name: "피곤냥이",
            age: 0,
            gender: null,
            follower_cnt: 0,
            image: "https://i.ibb.co/9q6ZT22/image.jpg",
            lat: 0.0,
            lng: 0.0,
          },
          member: {
            member_id: "a06a0c52-7bcb-4c6c-ac8c-a9d50cd8dfeb",
            university_id: 0,
            university_name: null,
            reward_id: 1,
            email: null,
            nickname: "노찌노찌",
          },
          tags: [
            {
              tag_id: 1,
              board_id: 0,
              name: "기지개 켜기",
              rate: 85.5,
            },
            {
              tag_id: 2,
              board_id: 0,
              name: "식빵 굽기",
              rate: 14.4,
            },
            {
              tag_id: 3,
              board_id: 0,
              name: "앉기",
              rate: 0.1,
            },
          ],
          lat: 37.501258,
          lng: 127.039516,
          content:
            "이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.",
          image: "https://i.ibb.co/9q6ZT22/image.jpg",
          created_at: [2023, 3, 31, 13, 36, 32, 109334900],
          recommend: 16,
          good: 12,
          impressed: 0,
          sad: 43,
          angry: 8,
        },
        {
          board_id: 9,
          university_id: 1,
          cat: {
            cat_id: 1,
            name: "피곤냥이",
            age: 0,
            gender: null,
            follower_cnt: 0,
            image: "https://i.ibb.co/9q6ZT22/image.jpg",
            lat: 0.0,
            lng: 0.0,
          },
          member: {
            member_id: "9e5871b8-15f3-4d5e-9cee-3472b3231aa0",
            university_id: 0,
            university_name: null,
            reward_id: 1,
            email: null,
            nickname: "노찌노찌",
          },
          tags: [
            {
              tag_id: 1,
              board_id: 0,
              name: "기지개 켜기",
              rate: 85.5,
            },
            {
              tag_id: 2,
              board_id: 0,
              name: "식빵 굽기",
              rate: 14.4,
            },
            {
              tag_id: 3,
              board_id: 0,
              name: "앉기",
              rate: 0.1,
            },
          ],
          lat: 37.501258,
          lng: 127.039516,
          content:
            "이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.",
          image: "https://i.ibb.co/9q6ZT22/image.jpg",
          created_at: [2023, 3, 31, 13, 36, 32, 109334900],
          recommend: 45,
          good: 39,
          impressed: 36,
          sad: 28,
          angry: 46,
        },
        {
          board_id: 10,
          university_id: 1,
          cat: {
            cat_id: 1,
            name: "피곤냥이",
            age: 0,
            gender: null,
            follower_cnt: 0,
            image: "https://i.ibb.co/9q6ZT22/image.jpg",
            lat: 0.0,
            lng: 0.0,
          },
          member: {
            member_id: "1af0ea65-9f31-4358-a12f-d1b3420b4957",
            university_id: 0,
            university_name: null,
            reward_id: 1,
            email: null,
            nickname: "노찌노찌",
          },
          tags: [
            {
              tag_id: 1,
              board_id: 0,
              name: "기지개 켜기",
              rate: 85.5,
            },
            {
              tag_id: 2,
              board_id: 0,
              name: "식빵 굽기",
              rate: 14.4,
            },
            {
              tag_id: 3,
              board_id: 0,
              name: "앉기",
              rate: 0.1,
            },
          ],
          lat: 37.501258,
          lng: 127.039516,
          content:
            "이 게시글에는 피곤한 고양이가 있어요. 저 모습은 출근할 때 제 모습과 같아요.",
          image: "https://i.ibb.co/9q6ZT22/image.jpg",
          created_at: [2023, 3, 31, 13, 36, 32, 109334900],
          recommend: 18,
          good: 25,
          impressed: 47,
          sad: 9,
          angry: 7,
        },
      ];

    default:
      break;
  }

  if (err.status) return Promise.reject(err);
  return Promise.resolve(res);
};

export default get;

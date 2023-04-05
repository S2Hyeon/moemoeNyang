import { createSlice } from "@reduxjs/toolkit";
export interface MapInfoType {
  lat: number;
  lng: number;
  level: number;
}

export interface CatType {
  cat_id: Number;
  name: string;
  age: Number;
  gender: string;
  follower_cnt: Number;
  image: string;
}

export interface PostType {
  boardId: Number;
  catId: Number;
  catImage: String;
  catName: String;
  memberNickname: String;
  boardImage: String;
  tags: Array<{
    name: String;
    rate: Number;
  }>;
  lat: Number;
  lng: Number;
  recommand: Number;
  good: Number;
  impressed: Number;
  sad: Number;
  angry: Number;
  myEmotion: String;
  content: String;
  createdAt: String;
}

export interface FeedType {
  feedspot_id: number;
  name: string;
  description: string;
  image: string;
  lat: number;
  lng: number;
  recent_feed_time: number;
  isActive: number;
}

export interface FeedHistory {
  member_id: number;
  nickname: string;
  created_at: number;
}

export interface CatPositionType {
  boardId: string;
  catImage: string;
  latlng: { lat: number; lng: number };
}

const initialState = {
  mapInfo: null as MapInfoType,
  selectedCat: null as CatType,
  isBottomHigh: false,
  catList: [] as Array<CatType>,
  postList: [] as Array<PostType>,
  selectedPost: null as PostType,
  feedsList: [] as Array<FeedType>,
  selectedFeed: null as FeedType,
  selectedFeedHistory: null as FeedHistory,
  catPositions: [
    {
      boardId: "noresult",
      catImage:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Fno_results_ui&psig=AOvVaw14gw5CRlJ6FlKhbILGandQ&ust=1680251087766000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjnmKudg_4CFQAAAAAdAAAAABAH",
      latlng: { lat: 37.550749, lng: 126.941303 },
    },
  ] as Array<CatPositionType>,
  centerPosition: {
    lat: 37.550749,
    lng: 126.941303,
  },
  selectedPostId: -1,
};

const mapSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMapInfo: (state, action: { payload: MapInfoType }) => {
      state.mapInfo = action.payload;
    },
    setSelectedCat: (state, action: { payload: CatType }) => {
      state.selectedCat = action.payload;
    },
    setBottomToggle: (state, action?: { payload: boolean }) => {
      const { payload } = action || null;
      if (typeof payload === "boolean") state.isBottomHigh = payload;
      else state.isBottomHigh = !state.isBottomHigh;
    },
    setCatList: (state, action?: { payload: Array<CatType> }) => {
      state.catList = action.payload;
    },
    setPostList: (state, action: { payload: Array<PostType> }) => {
      state.postList = action.payload;
    },
    setFeedsList: (state, action: { payload: Array<FeedType> }) => {
      state.feedsList = action.payload;
    },
    setSelectedFeed: (state, action: { payload: FeedType }) => {
      state.selectedFeed = action.payload;
    },
    setCatPositions: (state, action: { payload: Array<CatPositionType> }) => {
      //예외처리
      if (!action.payload.length) {
        state.catPositions = [
          {
            boardId: "noresult",
            catImage:
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Fno_results_ui&psig=AOvVaw14gw5CRlJ6FlKhbILGandQ&ust=1680251087766000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjnmKudg_4CFQAAAAAdAAAAABAH",
            latlng: { lat: 37.550749, lng: 126.941303 },
          },
        ];
      } else {
        state.catPositions = action.payload;
      }
    },
    setCenterPosition: (
      state,
      action: { payload: { lat: number; lng: number } },
    ) => {
      state.centerPosition = action.payload;
    },
    // setSelectedPostId: (state, action: { payload: number }) => {
    //   state.selectedPostId = action.payload;
    // },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
      console.log(action.payload);
      state.selectedPostId = action.payload?.board_id;
    },
  },
});

export default mapSlice;
export const {
  setMapInfo,
  setSelectedCat,
  setBottomToggle,
  setCatList,
  setPostList,
  setFeedsList,
  setSelectedFeed,
  setCatPositions,
  setCenterPosition,
  // setSelectedPostId,
  setSelectedPost,
} = mapSlice.actions;

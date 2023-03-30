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
  boardId: number;
  catId: number;
  catImage: string;
  catName: string;
  memberNickname: string;
  boardImage: number;
  tags: Array<{
    name: string;
    rate: number;
  }>;
  lat: number;
  lng: number;
  recommand: number;
  good: number;
  impressed: number;
  sad: number;
  angry: number;
  myEmotion: string;
  content: string;
  createdAt: string;
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
  feedsList: [] as Array<FeedType>,
  selectedFeed: null as FeedType,
  selectedFeedHistory: null as FeedHistory,
  catPositions: [] as Array<CatPositionType>,
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
      state.catPositions = action.payload;
    },
    setCenterPosition: (
      state,
      action: { payload: { lat: number; lng: number } },
    ) => {
      state.centerPosition = action.payload;
    },
    setSelectedPostId: (state, action: { payload: number }) => {
      state.selectedPostId = action.payload;
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
  setSelectedPostId,
} = mapSlice.actions;

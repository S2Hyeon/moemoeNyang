import { createSlice } from "@reduxjs/toolkit";

export interface MapInfoType {
  lat: number;
  lng: number;
  level: number;
}

export interface CatType {
  cat_id: Number;
  name: String;
  age: Number;
  gender: String;
  follower_cnt: Number;
  image: String;
}

export interface PostType {
  board_id: Number;
  cat: {
    cat_id: Number;
    image: String;
    name: Number;
  };
  member: {
    image: String;
    nickname: String;
  };
  image: Number;
  tags: [
    {
      name: String;
      rate: Number;
    },
  ];
  emotions: {
    recommand: Number;
    good: Number;
    impressed: Number;
    sad: Number;
    angry: Number;
  };
  myEmotion: String;
  content: String;
  created_at: String;
}

const initialState = {
  mapInfo: null as MapInfoType,
  selectedCat: null as CatType,
  isBottomHigh: false,
  catList: [] as Array<CatType>,
  postList: [] as Array<PostType>,
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
  },
});

export default mapSlice;
export const {
  setMapInfo,
  setSelectedCat,
  setBottomToggle,
  setCatList,
  setPostList,
} = mapSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD

=======
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
export interface MapInfoType {
  lat: number;
  lng: number;
  level: number;
}

export interface CatType {
  cat_id: Number;
<<<<<<< HEAD
  name: String;
  age: Number;
  gender: String;
  follower_cnt: Number;
  image: String;
=======
  name: string;
  age: Number;
  gender: string;
  follower_cnt: Number;
  image: string;
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
}

export interface PostType {
  board_id: Number;
  cat: {
    cat_id: Number;
<<<<<<< HEAD
    image: String;
    name: Number;
  };
  member: {
    image: String;
    nickname: String;
=======
    image: string;
    name: Number;
  };
  member: {
    image: string;
    nickname: string;
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
  };
  image: Number;
  tags: [
    {
<<<<<<< HEAD
      name: String;
=======
      name: string;
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
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
<<<<<<< HEAD
  myEmotion: String;
  content: String;
  created_at: String;
=======
  myEmotion: string;
  content: string;
  created_at: string;
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
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
}

const initialState = {
  mapInfo: null as MapInfoType,
  selectedCat: null as CatType,
  isBottomHigh: false,
  catList: [] as Array<CatType>,
  postList: [] as Array<PostType>,
<<<<<<< HEAD
=======
  feedsList: [] as Array<FeedType>,
  selectedFeed: null as FeedType,
  selectedFeedHistory: null as FeedHistory,
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
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
<<<<<<< HEAD
=======
    setFeedsList: (state, action: { payload: Array<FeedType> }) => {
      state.feedsList = action.payload;
    },
    setSelectedFeed: (state, action: { payload: FeedType }) => {
      state.selectedFeed = action.payload;
    },
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
  },
});

export default mapSlice;
export const {
  setMapInfo,
  setSelectedCat,
  setBottomToggle,
  setCatList,
  setPostList,
<<<<<<< HEAD
=======
  setFeedsList,
  setSelectedFeed,
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
} = mapSlice.actions;

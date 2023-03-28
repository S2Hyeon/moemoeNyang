import { createSlice } from "@reduxjs/toolkit";

export interface MemberType {
  accessToken: string;
  universityId: number;
  nickname: string;
  email: string;
}

const initialState = {
  memberObject: null as MemberType,
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMemberObject: (state, action) => {
      state.memberObject = action.payload;
    },
  },
});

export default memberSlice;
export const { setMemberObject } = memberSlice.actions;

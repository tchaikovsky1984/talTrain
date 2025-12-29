import { createSlice } from "@reduxjs/toolkit";

interface sqSliceIn {
  str: string;
}

const initVal: sqSliceIn = {
  str: ""
};

const sqSlice = createSlice({
  name: "sqSlice",
  initialState: initVal,
  reducers: {
    fetchAPIReq: (state, action) => {
      console.log("req");
    },
    fetchFailed: (state, action) => {
      console.log("failed: " + action.payload);
      console.log("current state: " + state.str);
    }
  }
})

export const { fetchAPIReq, fetchFailed } = sqSlice.actions;

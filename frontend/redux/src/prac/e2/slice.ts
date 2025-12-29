import { createSlice } from "@reduxjs/toolkit";

interface sqSliceIn {
  val: number;
}

const initVal: sqSliceIn = {
  val: 0
};

const sqSlice = createSlice({
  name: "sqSlice",
  initialState: initVal,
  reducers: {
    MATH_REQ: (state, action) => {
      console.log("req");
    },
    MATH_RES: (state, action) => {
      console.log("res: " + action.payload);
      state.val = action.payload;
    }
  }
})

export const { MATH_REQ, MATH_RES } = sqSlice.actions;

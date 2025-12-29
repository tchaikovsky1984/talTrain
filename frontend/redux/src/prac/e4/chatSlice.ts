import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface sqSliceIn {
  msg: string
}

const initVal: sqSliceIn = {
  msg: ""
};

const sqSlice = createSlice({
  name: "sqSlice",
  initialState: initVal,
  reducers: {
    fetchAPIReq: (state, action: PayloadAction<any>) => {
      console.log("req");
    },
    USER_CANCEL_CLICK: () => {
      console.log("cancelling");
    },
    sent: (state, action) => {
      console.log("sent");
      state.msg = action.payload;
    }
  }
})

export const { fetchAPIReq, USER_CANCEL_CLICK, sent } = sqSlice.actions;

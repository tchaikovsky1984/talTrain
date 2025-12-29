import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface sqSliceIn {
  user: {};
  products: any[];
}

const initVal: sqSliceIn = {
  user: {},
  products: []
};

const sqSlice = createSlice({
  name: "sqSlice",
  initialState: initVal,
  reducers: {
    fetchAPIReq: (state, action: PayloadAction<{ id: number }>) => {
      console.log("req");
    },
    fetchFailed: (state, action) => {
      console.log("failed: " + action.payload);
      console.log("current state: " + state.user + ", " + state.products);
    },
    INITIAL_DATA_LOADED: (state, action) => {
      console.log("updating");
      state.user = action.payload.user;
      state.products = action.payload.products;
    }
  }
})

export const { fetchAPIReq, fetchFailed, INITIAL_DATA_LOADED } = sqSlice.actions;

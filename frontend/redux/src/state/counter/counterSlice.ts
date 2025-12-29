import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initState: CounterState = {
  count: 0
};

const CounterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementBy: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    incrementAsyncReq: () => {
      console.log("incrementing...")
    }
  }
});

export default CounterSlice.reducer;
export const { increment, decrement, incrementBy, decrementBy, incrementAsyncReq } = CounterSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import CounterReducer from "./counter/counterSlice.ts";
import { watchcountersaga } from "./sagas/RandomDeltaSaga.ts";

const sagaMidd = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMidd);
  }
});

sagaMidd.run(watchcountersaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

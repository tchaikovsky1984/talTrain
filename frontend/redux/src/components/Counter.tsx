import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";
import { increment, decrement, incrementBy, decrementBy, incrementAsyncReq } from "../state/counter/counterSlice";
import { useState } from "react";

function Counter() {
  const [amt, setAmt] = useState(0);
  const count = useSelector((state: RootState) => {
    return state.counter.count;
  });
  const dispatch = useDispatch<AppDispatch>();

  return <>
    <h2>{count}</h2>
    <input type="number" value={amt} onChange={(e) => { setAmt(Number(e.target.value)) }} />
    <button onClick={() => {
      if (amt === 0)
        dispatch(increment());
      else
        dispatch(incrementBy(amt));
    }}>Inc</button>
    <button onClick={() => {
      if (amt === 0)
        dispatch(decrement());
      else
        dispatch(decrementBy(amt));
    }}>Dec</button>
    <button onClick={() => {
      dispatch(incrementAsyncReq());
    }}>Random Inc</button>
  </>;
}

export default Counter;

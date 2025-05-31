import React from "react";
import { counterActions } from "../slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { counterContext } from "../contexts/counterContext";
const Counter = () => {
  const dispatch = useDispatch();
//   let count = useSelector((state) => state.counter.value);
//   if (count < 0) {
//     count = 0;
//   }
  const {count, increment, decrement, incrementByAmount, decrementByAmount } =
    useContext(counterContext);
  return (
    <div>
      <h1>Counter</h1>
      <h3>Count: {count}</h3>
      <button onClick={ increment}>Increment</button>
      <button disabled={count === 0} onClick={decrement}>
        Decrement
      </button>
      <button onClick={() => incrementByAmount(5)}>Increment by 5</button>
      <button disabled={count <= 0} onClick={() => decrementByAmount(5)}>
        Decrement by 5
      </button>
    </div>
  );
};

export default Counter;

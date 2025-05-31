import { useState } from "react";
import { createContext } from "react";

export const counterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementByAmount = (amt) => {
    setCount((prevCount) => prevCount + amt);
  };

  const decrementByAmount = (amt) => {
    setCount((prevCount) => prevCount - amt);
  };
  const reset = () => {
    setCount(0);
  };

  const ctxValue = {
    count,
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset,
  };
  return (
    <counterContext.Provider value={ctxValue}>
      {children}
    </counterContext.Provider>
  );
};

export default CounterProvider;

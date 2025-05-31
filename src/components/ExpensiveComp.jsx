import React, { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const expensiveValue = useMemo(() => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += i;
    }
    return total * multiplier;
  }, [multiplier]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Expensive Result: {expensiveValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>
        Change Multiplier
      </button>
    </div>
  );
}
export default ExpensiveComponent;
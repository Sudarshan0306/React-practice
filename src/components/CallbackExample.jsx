import React from "react";

const CallbackExample = React.memo(({ handleClick }) => {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

export default CallbackExample;

import React from "react";
import { useState } from "react";

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  return children({ on, handleToggle });
};

export default Toggle;

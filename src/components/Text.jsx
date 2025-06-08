import React from "react";

const Text = ({ type, text }) => {
  const Component = type;
  return <Component>{text}</Component>;
};

export default Text;

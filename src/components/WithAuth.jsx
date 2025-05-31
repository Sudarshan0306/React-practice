import React from "react";

const WithAuth = (WrappedComp) => {
  return function ({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return <WrappedComp {...props} />;
  };
};
export default WithAuth;

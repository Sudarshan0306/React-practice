import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Index = () => {
  const { inputText, debouncedSearch, handleInputChange } = useDebounce();
  
  return (
    <div>
      <label htmlFor="input">Debounced Search</label>
      <input
        value={inputText}
        name="input"
        id="input"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Index;

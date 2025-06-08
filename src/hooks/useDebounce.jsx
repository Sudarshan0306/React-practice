import { useEffect, useState } from "react";

const useDebounce = () => {
  const [inputText, setInputText] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState(inputText);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    let timeOutId = setTimeout(() => {
      setDebouncedSearch(inputText);
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [inputText]);

  useEffect(() => {
    console.log(debouncedSearch);
  }, [debouncedSearch]);

  return {
    debouncedSearch,
    inputText,
    handleInputChange,
  };
};

export default useDebounce;

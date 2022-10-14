import { useEffect, useState } from "react";

export const useError = () => {
  const [inputValue, setInputValue] = useState({ name: "", value: "" });
  const [error, setError] = useState("");

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({
      ...prev,
      name,
      value
    }));
  };

  useEffect(() => {

    const value = inputValue.value;
    const reg = /^[a-zA-Z]*$/;

    if (value === "") {
      setError("Please enter a value");
      console.log('ERR');
    } else if (!reg.test(value)) {
      setError("Please enter a only letters values");
      console.log('ERR');
    } else {
      setError("");
    }
  }, [inputValue.value]);

  return {
    inputValue,
    handleOnchange,
    error
  }

}
import { useEffect, useState } from "react";

export const useLoginUser = () => {
  const [inputValues, setInputValues] = useState({ name: "", value: "" });
  const [errors, setErrors] = useState("");

  const handleOnchanges = (event) => {
    const { name, value } = event.target;
    setInputValues((prev) => ({
      ...prev,
      name,
      value
    }));
  };

  useEffect(() => {

    const value = inputValues.value;
    const espace = /\s/;
    const numbers = /[0-9]/;

    if (value === "") {
      setErrors("Please enter a value");
      console.log('ERR');
    }else if(numbers.test(value)){
      setErrors("Please do not enter numbers, only letters values");
      console.log('ERR');
    }else if(espace.test(value)){
      setErrors("Please do not enter blank spaces");
      console.log('ERR');
    }else if(value.length < 3){
      setErrors("3 Min Characteres");
      console.log('ERR');
    }else if(value.length > 10){
      setErrors("10 Max Characteres");
      console.log('ERR');
    }else{
      setErrors("");
    }
    
  }, [inputValues.value]);

  return {
    inputValues,
    handleOnchanges,
    errors
  }

}
import { useEffect, useState } from "react";

export const useLoginPassword = () => {
  const [inputValuesPassword, setInputValuesPassword] = useState({ name: "", value: "" });
  const [errorsPassword, setErrorsPassword] = useState("");

  const handleOnchangesPassword = (event) => {
    const { name, value } = event.target;
    setInputValuesPassword((prev) => ({
      ...prev,
      name,
      value
    }));
  };

  useEffect(() => {

    const value = inputValuesPassword.value;
    const reg = /^[a-zA-Z0-9]*$/;
    const espace = /\s/;

    if (value === "") {
      setErrorsPassword("Please enter a value");
      console.log('ERR');
    }else if(espace.test(value)){
      setErrorsPassword("Please do not enter blank spaces");
      console.log('ERR');
    }else if(!reg.test(value)){
      setErrorsPassword("Please enter only alphanumeric, no special characteres");
      console.log('ERR');
    }else if(value.length <= 8){
      setErrorsPassword("8 Min Characteres");
      console.log('ERR');
    }else if(value.length >= 15){
      setErrorsPassword("15 Max Characteres");
      console.log('ERR');
    }else{
      setErrorsPassword("");
    }

  }, [inputValuesPassword.value]);

  return {
    inputValuesPassword,
    handleOnchangesPassword,
    errorsPassword
  }

}
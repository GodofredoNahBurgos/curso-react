import { useState } from "react";

export const useError = () => {

    const [error, setError] = useState("");

    const handleOnchange = () => {
    
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

    setInputValue((prev) => ({
      ...prev,
       name,
       value
     }));

    }

    return {
      handleOnchange,
      error 
    }

}
import { useEffect, useState } from "react";

export const useItem = () => {

    const [item, setItem] = useState([]);

    const addItem = (item) => {


      useEffect(() => {

        setItem(() => {
          lista.push(item);
        }) 


      }, [item]);    

    };
  
    return {
        
      addItem

    };

}
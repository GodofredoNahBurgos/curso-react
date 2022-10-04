import { useEffect, useState } from "react";
import { getAll } from "./services/apiConsults";

export const useFetch = () => {

    const [fetch, setFetch] = useState({estado: false});

    const cargarApi = (BASE_URL) => {

      useEffect(() => {

        console.log("Estado: " + fetch.estado);

        console.log("Cargando datos..");

        fetch.estado = true;
        
        console.log("Estado: " + fetch.estado);

        getAll(BASE_URL)
          .then((response) => {
            setFetch(() => {
              console.log("Datos Cargados..");
              fetch.estado = false;
              console.log([...response.map((items, index) => ({ id: index, items: {items} }))]);
              console.log("Estado: " + fetch.estado);
            }
            );

          })
          .catch(() => {

            console.log("Error Cargados..");

          });
  
      }, []);    

    };
  
    return {
      cargarApi
    };

}
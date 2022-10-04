import React, { useEffect, useState } from "react";

import { GridTable } from "./components/GridTable";

import { headers } from "./data/headers";

import { getAll } from "./services/starWars";

export const Home = () => {

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getAll()
      .then((response) => {
        setPlanets([
          ...response.map((item, index) => ({
            id: index,
            name: item.name,
            height: item.height,
            hair_color: item.hair_color,
            skin_color: item.skin_color

          }))
        ]);
      })
      .catch();
  }, []);

  return (
    <>
      <h1>TABLA STAR WARS</h1>
      <p>{}</p>
      <GridTable headers = { headers } body = {planets} />    
      
    </>
  );
};
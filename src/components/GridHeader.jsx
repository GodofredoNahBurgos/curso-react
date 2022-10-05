import React from "react";

export const GridHeader = ({headers}) =>{
    return(
    <thead>
    <tr>
        {headers.map((head, index) => (
          <th key={index}>{head}</th>
        ))}
    </tr>
    </thead>
    )
};
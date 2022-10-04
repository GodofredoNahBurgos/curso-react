import React from "react";

export const GridBody = ({ body }) => {

    return(        
        <tbody>
            
            {body.map((item) => (
            <tr key = {item.id}>
            <td>{item.name}</td>
            <td>{item.height}</td>
            <td>{item.hair_color}</td>
            <td>{item.skin_color}</td>
            </tr>
            ))}
            
        </tbody>
    )
};
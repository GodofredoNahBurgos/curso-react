import React from "react";

import { GridHeader } from "./GridHeader";

import { GridBody } from "./GridBody";

export const GridTable = ({ headers, body }) => {

    return(

    <table>
    <GridHeader headers = { headers } />
    <GridBody body = { body }/>    
    </table>   

    )

};
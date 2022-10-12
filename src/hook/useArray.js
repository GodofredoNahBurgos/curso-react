import { useState } from "react";

export const useArray = (defaultValue = []) => {
    const [array, setArray] = useState(defaultValue);

    function filter(callback) {
        setArray((prev) => prev.filter(callback));
    }

    return {
        array,
        set: setArray,
        filter
    }
};
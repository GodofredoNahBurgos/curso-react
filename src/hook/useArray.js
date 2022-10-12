import { useState } from "react";

export const useArray = (defaultValue = []) => {
    const [array, setArray] = useState(defaultValue);

    function filter(callback) {
        setArray((prev) => prev.filter(callback));
    }

    function unshift(element) {
        setArray((prev) => [element, ...prev]);
    }

    return {
        array,
        set: setArray,
        filter,
        unshift
    }
};
import { useEffect, useState } from "react";
import { listArray } from "../services/listArray";

export const useHook = () => {

  const [list, setList] = useState(listArray);
  const [inputValue, setInputValue] = useState({ name: "", value: "" });
  const [error, setError] = useState("");

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({
      ...prev,
      name,
      value
    }));
  };

  const handleDelete = (id) => {
    setList((prev) => ([
      ...prev.filter((item) => item.id !== id)
    ]));
  };

  const handleInsert = () => {
    setList((prev) => ([
      {
        id: Math.floor(Math.random() * 100),
        name: inputValue.value,
      },
      ...prev
    ]));
  };

  const handleEdit = (id) => {
    setList((prev) => ([
      ...prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: inputValue.value
          }
        }
        return item;
      })
    ]));
  };

  useEffect(() => {
    if (inputValue.value === "") {
      setError("Please enter a value");
      console.log('ERR');
    } else if (inputValue.value < 0 || inputValue.value > 0) {
      setError("Please enter a only letters values");
      console.log('ERR');
    } else {
      setError("");
    }
  }, [inputValue.value]);

  return {
    handleDelete,
    handleEdit,
    handleInsert,
    handleOnchange,
    list
  }

}
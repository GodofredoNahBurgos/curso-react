import { useEffect, useState } from "react";
import "./App.css";
import { useArray } from "./hook/useArray";
import { listArray } from "./services/listArray";

// let listArray = [
//   { id: Math.floor(Math.random() * 100), name: "Uno" },
//   { id: Math.floor(Math.random() * 100), name: "Dos" },
//   { id: Math.floor(Math.random() * 100), name: "Tres" },
//   { id: Math.floor(Math.random() * 100), name: "Cuatro" },
// ];

function App() {
  const {
    array: list,
    set: setList,
    filter: filterList,
    unshift: unshiftList,
    map: mapList,
  } = useArray(listArray);
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
    filterList((item) => item.id !== id);
  };

  const handleInsert = () => {
    unshiftList({
      id: Math.floor(Math.random() * 100),
      name: inputValue.value,
    });
  };

  const handleEdit = (id) => {
    mapList((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: inputValue.value
        }
      }
      return item;
    });
  };

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

  return (
    <div className="App">
      <div className="div-prueba">
        <input type="text" name="name" onChange={handleOnchange} value={inputValue.value} />
        <button onClick={() => handleInsert()} disabled={error !== ""} >Agregar</button>
        {error !== "" && <>
          <br />
          <span style={{ color: "red" }} >{error}</span>
        </>}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>Accion</th>
              <th>Accion</th>
            </tr>
          </thead>

          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Editar</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Elminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
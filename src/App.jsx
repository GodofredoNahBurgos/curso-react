import { useEffect, useState } from "react";
import "./App.css";

function App() {
  
  let array = [
    { id: 1, name: "Uno" },
    { id: 2, name: "Dos" },
    { id: 3, name: "Tres" },
    { id: 4, name: "Cuatro" },
  ];

  //Eliminar
  const [del, setDel] = useState(array);

  const handleDelete = (id) => {
    setDel(() => {
      console.log("Delete", id);
      array = array.filter((element) => {
        return element.id !== id;
      });
      console.log(array);
    });
  };

  //Insertar
  const [inset, setInset] = useState(array);

  const handleInsert = () => {

    array = array;
    setInset(() => {
      array.push({
        id: array.length,
        name: document.getElementById("elemento").value,
      });
      console.log(array);
    });
  };

  //Editar
  const [edit, setEdit] = useState(array);

  const handleEdit = (id) => {
    setEdit(() => {
      array = array.map((item) =>
        item.id === id
          ? { ...item, name: document.getElementById("elemento").value }
          : item
      );
      console.log(array);
    });
  };

  return (
    <div className="App">
      <div className="div-prueba">
        <input type="text" id="elemento" />
        <button onClick={() => handleInsert()}>Agregar</button>

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
            {array.map((item, index) => (
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

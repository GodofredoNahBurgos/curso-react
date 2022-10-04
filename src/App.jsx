import './App.css'
let arreglo = [
  { id: 1, name: "Uno" },
  { id: 2, name: "Dos" },
];

function App() {

  const handleDelete = (id) => {
    console.log('DELETE', id);
    // filter
  };
  return (

    <div className="App">

      <div className="div-prueba">
        <input type="text" id="elemento" />
        <button >Agregar</button>

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>Accion</th>
              <th>Accion</th>
              <th>Accion</th>
            </tr>
          </thead>

          <tbody>

            {arreglo.map(({ id, name }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td><button >Editar</button></td>
                <td><button >Actualizar</button></td>
                <td><button onClick={() => handleDelete(id)}>Elminar</button></td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </div>
  )
}

export default App

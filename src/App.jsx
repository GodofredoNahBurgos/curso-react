import './App.css'

function App() {

  let arreglo = ["uno", "dos"];
  
  return (

    <div className="App">

      <div className = "div-prueba">
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
          
        {arreglo.map((items, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{items}</td>
            <td><button >Editar</button></td>
            <td><button >Actualizar</button></td>
            <td><button >Elminar</button></td>
          </tr>
         
        ))}
        
          </tbody>
          
        </table>
      </div>
    </div>
  )
}

export default App

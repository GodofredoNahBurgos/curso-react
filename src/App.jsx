import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./App.css";
import { useError } from "./hook/useError";
import { useLoginUser } from "./hook/useLoginUser";  
import { useLoginPassword } from "./hook/useLoginPassword"; 
import { useHandleList } from "./hook/useHandleList";
import { listArray } from "./services/listArray";
import { dataBase } from "./services/dataBase";
import { Button, TextField } from '@mui/material';

function App() {
  const { list, handleInsert, handleEdit, handleDelete } = useHandleList(listArray);
  const { inputValue, handleOnchange, error } = useError();
  const { inputValues, handleOnchanges, errors } = useLoginUser();
  const { inputValuesPassword, handleOnchangesPassword, errorsPassword } = useLoginPassword ();

  const ingreso = () => {
    let validLogin = false;
    dataBase.forEach(element => {
    if((element.name == inputValues.value) && (element.password == inputValuesPassword.value)){
      validLogin = true;
    }
    });
    if(validLogin == false){
      alert("Usuario o Contraseña Incorrecta");
    }else if(validLogin == true){
      alert("Ingreso Correcto");
    }
  }

  return (
    <div className="App">
      <div className="div-prueba">
        <label>Usuario: </label>
        <TextField id="standard-basic" label="USUARIO" variant="standard" />
        <input type="text" name="user" onChange={handleOnchanges} value={inputValues.value}></input>
        {errors !== "" && <>
          <span style={{ color: "red" }} >{errors}</span>
        </>}<br/>
        <label>Contraseña: </label>
        <input type="text" name="password" onChange={handleOnchangesPassword} value={inputValuesPassword.value}></input>
        {errorsPassword !== "" && <>
          <span style={{ color: "red" }} >{errorsPassword}</span>
        </>}<br/>
        <Button variant="contained" onClick={ingreso}>Ingresar</Button>

        <hr/><input type="text" name="name" onChange={handleOnchange} value={inputValue.value} />
        <button onClick={() => handleInsert(inputValue.value)} disabled={error !== ""} >Agregar</button>
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
                  <button onClick={() => handleEdit(item.id, inputValue.value)}>Editar</button>
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
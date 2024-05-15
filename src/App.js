import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Paginas/autenticacion/Login";
import Registro from "./Paginas/autenticacion/Registro";
import Home from "./Paginas/Home";
import MostrarClientes from "./Paginas/Modulos/MostrarClientes";
// import EditarClientes from "./Paginas/Modulos/EditarClientes";
import AgregarClientes from "./Paginas/Modulos/AgregarClientes";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/Registro" exact element={<Registro />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/clientes" exact element={<MostrarClientes />} />
            <Route path="/clientes/agregar" exact element={<AgregarClientes />} />
            {/* <Route path="/editarCliente/:id" exact element={<EditarClientes />}/> */}
          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;


import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Paginas/autenticacion/Login';
import Registro from './Paginas/autenticacion/Registro';
import Home from './Paginas/Home';
import MostrarClientes from './Paginas/Modulos/MostrarClientes';



function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/Registro" exact element={<Registro />} />
            <Route path="/home" exact element={<Home/>} />
            <Route path="/clientes" exact element={<MostrarClientes/>} />
            
          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;

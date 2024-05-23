import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:5000/api/clientes/";

const ModificarCliente = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const guardarCliente = async (e) => {
    e.preventDefault();
    await axios.put(`${URL}${id}`, {
      nombres,
      apellidos,
      documento,
      correo,
      telefono,
      direccion,
    });
    navigate("/clientes");
  };
  useEffect(() => {
    getClientesByID();
    //eslint-disable-next-line
  }, []);
  const irAClientes = () => {
    navigate("/clientes");
  };
  const getClientesByID = async () => {
    const res = await axios.get(`${URL}${id}`);
    setNombres(res.data.nombres);
    setApellidos(res.data.apellidos);
    setDocumento(res.data.documento);
    setCorreo(res.data.correo);
    setTelefono(res.data.telefono);
    setDireccion(res.data.direccion);
  };
  return (
    <div className="container contenedor mx-auto" style={{ maxWidth: "800px" }}>
      <h3 className="text-center">Modificar Cliente</h3>
      <form onSubmit={guardarCliente}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Nombres</label>
              <input
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingrese los nombres"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellidos</label>
              <input
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingrese los apellidos"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Documento</label>
              <input
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                type="number"
                className="form-control"
                placeholder="Ingrese el número de documento"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingrese el correo electrónico"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                type="number"
                className="form-control"
                placeholder="Ingrese el número de teléfono"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingrese la dirección"
                required
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <button
              type="button"
              onClick={irAClientes}
              className="btn btn-secondary me-2"
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Guardar Cambios
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModificarCliente;
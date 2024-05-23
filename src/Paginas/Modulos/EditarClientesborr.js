import React, { useState, useEffect } from "react";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import { useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../../archivoApi/APIInvoke";
import swal from "sweetalert";

const EditarClientes = () => {
  const [nombres, setNombres] = useState(" ");
  const [apellidos, setApellidos] = useState(" ");
  const [documento, setDocumento] = useState(" ");
  const [correo, setCorreo] = useState(" ");
  const [direccion, setDireccion] = useState(" ");
  const [telefono, setTelefono] = useState(" ");
  const navigate = useNavigate();
  const { id } = useParams();

  const modificarCliente = async (e) => {
    e.preventDefault();
    await APIInvoke.invokePUT(`/api/clientes/${id}`, {
      nombres: nombres,
      apellidos: apellidos,
      documento: documento,
      correo: correo,
      direccion: direccion,
      telefono: telefono,
    });
    navigate("/clientes");
  };

  useEffect(() => {
    document.getClientesByID();
  }, []);

  const getClientesByID = async () => {
    const resp = await APIInvoke.invokePUT(`/api/clientes/${id}`);
    setNombres(resp.nombres);
    setApellidos(resp.apellidos);
    setDocumento(resp.documento);
    setCorreo(resp.correo);
    setDireccion(resp.direccion);
    setTelefono(resp.telefono);
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Editar Clientes"}
          breadCrumb1={"Listado de clientes"}
          breadCrumb2={"Creacion"}
          ruta1={"/clientes"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>

            <div className="card-body">
              <form onSubmit={modificarCliente}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombres">Nombres</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombres"
                      name="nombres"
                      placeholder="ingrese el nombres del Cliente"
                      value={nombres}
                      // onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombres">Apellidos</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellidos"
                      name="apellidos"
                      placeholder="ingrese el apellidos del Cliente"
                      value={apellidos}
                      // onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombres">Documento</label>
                    <input
                      type="text"
                      className="form-control"
                      id="documento"
                      name="documento"
                      placeholder="ingrese el documento del Cliente"
                      value={documento}
                      // onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombres">Correo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="correo"
                      name="correo"
                      placeholder="ingrese el correo del Cliente"
                      value={correo}
                      // onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombres">Telefono</label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      placeholder="ingrese el apellidos del Cliente"
                      value={telefono}
                      // onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombres">Direccion</label>
                    <input
                      type="text"
                      className="form-control"
                      id="direccion"
                      name="direccion"
                      placeholder="ingrese el apellidos del Cliente"
                      value={direccion}
                      // onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Editar cliente
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EditarClientes;

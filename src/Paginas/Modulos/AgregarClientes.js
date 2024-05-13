import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../val/APIInvoke";
import swal from "sweetalert";

function AgregarClientes() {
  const navigate = useNavigate();

  const [clientes, setCliente] = useState({
    nombres: "",
    apellidos: "",
    documento: "",
    correo: "",
    telefono: "",
    direccion: "",
  });

  const { nombres, apellidos, documento, correo, telefono, direccion } = cliente;

 

  useEffect(() => {
    document.getElementById("nombres").focus();
  }, []);

  const onChange = (e) => {
    setCliente({
      ...clientes,
      [e.target.name]: e.target.value,
    });
  };

  const crearClientes = async () => {
    const data = {
      nombres: clientes.nombres,
      apellidos: clientes.apellidos,
      documento: clientes.documento,
      correo: clientes.correo,
      telefono: clientes.telefono,
      direccion: clientes.direccion,
    };

    const response = await APIInvoke.invokePOST(`/api/rutas/clientes`, data);

    const idCliente = response.cliente._id;

    if (idCliente === "") {
      const msg = "hubo un error al crear el cliente";
      swal({
        title: "Información",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
    } else {
      const msg = "El cliente fue creado correctamente";
      swal({
        title: "Información",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      setCliente({
        nombres: "",
        apellidos: "",
        documento: "",
        correo: "",
        telefono: "",
        direccion: "",
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearClientes();
  };

  return (
    <div>
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <ContentHeader
        titulo={"Agregar Clientes"}
        breadCrumb1={"Listado de Clientes"}
        breadCrumb2={"Creacion"}
        ruta1={"/clientes/agregar"}
      ></ContentHeader>
    </div>
  );
}

export default AgregarClientes;

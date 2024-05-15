// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ContentHeader from "../../Componentes/ContentHeader";
// import Footer from "../../Componentes/Footer";
// import Navbar from "../../Componentes/Navbar";
// import SidebarContainer from "../../Componentes/SidebarContainer";
// import APIInvoke from "../../archivoApi/APIInvoke";
// import swal from "sweetalert";
// import React from "react";

// const EditarClientes = () => {
//   const navigate = useNavigate();

//   const { idClientes } = useParams();
//   let res = idClientes.split("@");
//   const ncliente = res[1];

//   const [cliente, setCliente] = useState({
//     nombres: ncliente,
//     apellidos: ncliente,
//     documento: ncliente,
//     correo: ncliente,
//     telefono: ncliente,
//     direccion: ncliente,
//   });

//   const { nombres, apellidos, documento, correo, telefono, direccion } =
//     cliente;

//   useEffect(() => {
//     document.getElementById("nombres").focus();
//   });

//   const onChange = (e) => {
//     setCliente({
//       ...cliente,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const addCliente = async () => {
//     let res = idclientes.split("@");
//     const idClientes = res[0];

//     const data = {
//       nombres: Clientes.nombres,
//       apellidos: Clientes.apellidos,
//       documento: Clientes.documento,
//       correo: Clientes.correo,
//       telefono: Clientes.telefono,
//       direccion: Clientes.direccion,
//     };

//     const response = await APIInvoke.invokePUT(
//       `/api/rutas/clientes/${idClientes}`,
//       data
//     );
//     const addClientes = response.clientes._id;

//     if (addClientes !== idClientes) {
//       const msg = "El cliente NOO fue actualizado correctamente";
//       swal({
//         title: "Error",
//         text: msg,
//         icon: "error",
//         buttons: {
//           confirm: {
//             text: "Ok",
//             value: true,
//             visible: true,
//             className: "btn btn-danger",
//             closeModal: true,
//           },
//         },
//       });
//     } else {
//       navigate("/clientes");
//       const msg = "El cliente fue actualizado correctamente";
//       swal({
//         title: "Información",
//         text: msg,
//         icon: "success",
//         buttons: {
//           confirm: {
//             text: "Ok",
//             value: true,
//             visible: true,
//             className: "btn btn-primary",
//             closeModal: true,
//           },
//         },
//       });
//     }
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     addClientes();
//   };

//   return (
//     <div>
//       <Navbar></Navbar>
//       <SidebarContainer></SidebarContainer>
//       <div className="content-wrapper"> </div>

//       <ContentHeader
//         titulo={"Agregar Clientes"}
//         breadCrumb1={"Listado de Clientes"}
//         breadCrumb2={"Creacion"}
//         ruta1={"/clientes/agregar"}
//       ></ContentHeader>
//     </div>
//   );
// };

// export default EditarClientes;

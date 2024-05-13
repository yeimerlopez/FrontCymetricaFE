// import React, { useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import APIInvoke from '../../archivoApi/APIInvoke.js'
// import swal from 'sweetalert'

// const Login = () => {



//     const navigate = useNavigate();
//     const [usuario, setUsuario] = React.useState({
//         email: '',
//         password: ''
//     });

//     const { email, password } = usuario;
//     const onChange = (e) => {
//         setUsuario({
//             ...usuario,
//             [e.target.name]: e.target.value
//         })
//     }

//     useEffect(() => {
//         document.getElementById("email").focus();
//     },[])

//     const IniciarSesion = async () => {

//         if(password.length < 8 ){
//             const msg = "La contraseña debe ser mayor a 8 caracteres minimo";

//             swal({
//                 title: "Error",
//                 text: msg,
//                 icon: "error",
//                 button: {
//                     confirm:{
//                         text: "Ok",
//                         value: true,
//                         visible: true,
//                         className: "btn btn-primary",
//                         closeModal: true                        
//                     }
//                 }
//             })
//         }else{
//             const data = {
//                 email: usuario.email,
//                 password: usuario.password
//             }
//             const res = await APIInvoke.invokePOST(`/auth/auth`, data);
//             const mensaje = res.msg;

//             if ( mensaje === "El Usuario no existe" || mensaje === 'con'){

//                 const msg = "No es posible que iniciae seccion, verifique sus datos ";


//                 swal({
//                     title: "Error",
//                     text: msg,
//                     icon: "error",
//                     button: {
//                         confirm:{
//                             text: "Ok",
//                             value: true,
//                             visible: true,
//                             className: "btn btn-primary",
//                             closeModal: true                        
//                         }
//                     }
//                 })
//             }else{
//                 const  jwt = response.token;
//                 //
//                 localStorage.setItem("token", jwt);
//                 navigate("/Home");
//             }
//         }
//     }
//     const onSubmit = (e) => {
//         e.preventDefault();
//         IniciarSesion();
//     }

















//     return (
//         <div className="hold-transition login-page">
//             <div className="login-box">
//                 <div className="login-logo">

                
//                 <Link to={"#"}>  <b>Iniciar </b>Secion</Link>
//                 </div>
//                 <div className="card">
//                 <div className="card-body login-card-body">
//                     <p className="login-box-msg">
//                         Bienvenido logeate para acceder
//                     </p>
//                     <form onSubmit={onSubmit}
//                     >
//                     <div className="input-group mb-3">
//                         <input type="email"
//                         className="form-control"
//                         placeholder="Email"
//                         />
//                         <div className="input-group-append">
//                         <div className="input-group-text">
//                             <span className="fas fa-envelope" />
//                         </div>
//                         </div>
//                     </div>

//                     <div className="input-group mb-3">
//                         <input type="password"
//                         className="form-control"
//                         placeholder="Password"
                        
//                         />

//                         <div className="input-group-append">
//                         <div className="input-group-text">
//                             <span className="fas fa-lock" />
//                         </div>
//                         </div>
//                     </div>

//                     <div className="social-auth-links text-center mb-3">
//                         <button type="submit" className="btn btn-primary btn-block">Iniciar Secion</button>
//                         <Link to={"/registro"}className="btn btn-block btn-danger">Crear Cuenta </Link>
                        
//                     </div>
//                     </form>
//                 </div>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default Login
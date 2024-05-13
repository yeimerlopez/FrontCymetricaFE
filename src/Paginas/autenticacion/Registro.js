import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import APIInvoke from "../../archivoApi/APIInvoke";
import swal from "sweetalert";

const Registro = () => {
  const [usuario, setUsuario] = useState({
    nombres: "",
    correo: "",
    password: "",
    confirmar: "",
  });

  const { nombres, correo, password, confirmar } = usuario;

  console.log(
    `estos son los datos que ingreste ${usuario.nombres}, ${usuario.correo}, ${usuario.password}, ${usuario.confirmar}`
  );

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("nombres").focus();
  }, []);

  /**Funcion Registrar Cuenta */

  const RegistrarCuenta = async () => {
    if (password !== confirmar) {
      const men = "las contraseñas no coinciden";
      swal({
        title: "Error",
        text: men,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      if (password.length < 10) {
        const men = "la contraseña minimo debe tener 10 caracteres minimo";
        swal({
          title: "Error",
          text: men,
          icon: "error",
          buttons: {
            confirm: {
              text: "ok",
              value: true,
              visible: true,
              className: "btn btn-danger",
              closeModal: true,
            },
          },
        });
      } else {
        const data = {
          nombres: usuario.nombres,
          correo: usuario.correo,
          password: usuario.password,
        };
        const response = await APIInvoke.invokePOST("/api/usuarios", data);
        const mensaje = response.msg;
        console.log("mensaje de error fuera del if", mensaje);

        if (mensaje === "El usuario ya existe") {
          const msg = "El usuario ya existe";

          swal({
            title: "Error",
            text: msg,
            icon: "error",
            buttons: {
              confirm: {
                text: "Ok",
                value: true,
                visible: true,
                className: "btn btn-danger",
                closeModal: true,
              },
            },
          });
        } else {
          const msg = "la cuenta fue creada exitosamente";
          swal({
            title: "Informacion",
            text: msg,
            icon: "success",
            buttons: {
              confirm: {
                text: "ok",
                value: true,
                visible: true,
                className: "btn btn-primary",
                closeModal: true,
              },
            },
          });

          setUsuario({
            nombres: "",
            correo: "",
            password: "",
            confirmar: "",
          });
        }
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    RegistrarCuenta();
  };

  return (
    <div className="hold-transition register-page">
      <div className=" login-box ">
        <div className=" login-logo  ">
          <b>Registrar</b>
          {/* <Link to={"#"}> Registro</Link> */}
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg"> Ingresa los datos de usuario</p>

            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombres "
                  id="nombres"
                  name="nombres"
                  onChange={onChange}
                  value={nombres}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="correo"
                  className="form-control"
                  placeholder="Correo"
                  id="correo"
                  name="correo"
                  value={correo}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="confirmar contraseña"
                  id="confirmar"
                  name="confirmar"
                  value={confirmar}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="social-auth-links text-center" mb-3>
                <button type="submit" className="btn btn-primary btn-block">
                  {" "}
                  Registrarse
                </button>
                <Link to={"/"} className="btn btn-block btn-danger">
                  Regresar al login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;

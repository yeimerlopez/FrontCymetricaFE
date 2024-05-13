import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import APIInvoke from "../../archivoApi/APIInvoke.js";

const Login = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    correo: "",
    password: "",
  });

  const { correo, password } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("correo").focus();
  }, []);

  const IniciarSesion = async () => {
    if (password.length < 10) {
      const msg = "la contraseña minimo debe tener 10 caracteres minimo";
      swal({
        title: "Error",
        text: msg,
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
        correo: usuario.correo,
        password: usuario.password,
      };

      const response = await APIInvoke.invokePOST("/api/auth", data);
      const mensaje = response.msg;

      if (mensaje === "El usuario no existe") {
        const msg =
          "Usuario no existe. Por favor verifique los datos ingresados";
        swal({
          title: "Error",
          text: msg,
          icon: "error",
          buttons: {
            confirm: {
              text: "OK",
              value: true,
              visible: true,
              className: "btn btn-danger",
              closeModal: true,
            },
          },
        });
      } else if (mensaje === "Contraseña incorrecta") {
        const msg =
          "Contraseña incorrecta. Por favor verifique los datos ingresados";
        swal({
          title: "Error",
          text: msg,
          icon: "error",
          buttons: {
            confirm: {
              text: "OK",
              value: true,
              visible: true,
              className: "btn btn-danger",
              closeModal: true,
            },
          },
        });
      } else {
        // el token de acceso
        const jwt = response.token;
        // se guarda el token
        localStorage.setItem("token", jwt);
        navigate("/Home");
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    IniciarSesion();
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>Iniciar</b> Sesion
          </Link>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg"> Bienvenido, puede loguearse </p>

            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
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

              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  {" "}
                  Ingresar{" "}
                </button>
                {/* <button type='submit' className='btn btn-block btn-success'>recuperar Contraseña</button> */}
                <Link to={"/Registro"} className="btn btn-block btn-danger">
                  {" "}
                  Crear Cuenta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

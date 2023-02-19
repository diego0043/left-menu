import { useRef } from "react";
import logo from "../assets/logo.png";
import imgPerfil from "../assets/img-perfil.jpg";

export const Menu = () => {
  const body = useRef();
  const menu = useRef();
  const btn_open = useRef();
  const user_img = useRef();

  //evento para mostrar y ocultar el menu
  const showMenu = () => {
    menu.current.classList.toggle("menu_side_move");
    body.current.classList.toggle("body_move");
    user_img.current.classList.toggle("img_user_move");
  };

  //evento para mostrar y ocultar el menu al dar click en el boton
  return (
    <>
      <div ref={body}>

        <header>
          <div className="icon_menu">
            <span
              onClick={showMenu}
              ref={btn_open}
              className="material-icons-outlined"
            >
              menu
            </span>
          </div>
          <div className="container_img">
          <img ref={user_img} title="Ver perfil" src={imgPerfil} alt="" />

          </div>

        </header>

        <div className="menu_side" ref={menu}>
          <div className="name_page">
            <img src={logo} alt="" />
            <h4>AES Calidades</h4>
          </div>
          <hr className="row" />

          <div className="options_menu">
            <a className="selected" href="#">
              <div className="option">
                <span title="General" className="material-icons-outlined">
                  tips_and_updates
                </span>
                <h4>General</h4>
              </div>
            </a>
            <a href="#">
              <div className="option">
                <span title="Seguridad" className="material-icons">
                  lock
                </span>
                <h4>Seguridad</h4>
              </div>
            </a>
            <a href="#">
              <div className="option">
                <span
                  title="Calidad de producto tecinico"
                  className="material-icons"
                >
                  view_in_ar
                </span>
                <h4>Producto tecnico</h4>
              </div>
            </a>
            <a href="#">
              <div className="option">
                <span
                  title="Calidad servicio comercial"
                  className="material-icons"
                >
                  leaderboard
                </span>
                <h4>Servicio comercial</h4>
              </div>
            </a>
            <a href="#">
              <div className="option">
                <span
                  title="Calidad servicio tecnico"
                  className="material-icons"
                >
                  dynamic_form
                </span>
                <h4>Servicio tecnico</h4>
              </div>
            </a>
          </div>
        </div>

        <div className="container">
          <h1 >Bienvenido</h1>
          <div></div>
          <h2>Sistema AES Calidades</h2>
        </div>
      </div>
    </>
  );
};

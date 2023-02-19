import { useRef, useState } from "react";
import logo from "../assets/logo.png";
import imgPerfil from "../assets/img-perfil.jpg";

export const Menu = () => {
  const body = useRef();
  const menu = useRef();
  const btn_open = useRef();
  const user_img = useRef();
  const general = useRef();
  const seguridad = useRef();
  const productoTecnico = useRef();
  const servicioComercial = useRef();
  const servicioTecnico = useRef();
  const names = ["general", "seguridad", "productoTecnico", "servicioComercial", "servicioTecnico"];

  const [leftMenu, setleftMenu] = useState({
    general: true,
    seguridad: false,
    productoTecnico: false,
    servicioComercial: false,
    servicioTecnico: false,
  })

  const changeStateClass = (name = "general") => {

      if ( name === "general" ) {
        general.current.classList.toggle("selected")
        seguridad.current.classList.remove("selected")
        productoTecnico.current.classList.remove("selected")
        servicioComercial.current.classList.remove("selected")
        servicioTecnico.current.classList.remove("selected")
      } else if ( name === "seguridad"){
        general.current.classList.remove("selected")
        seguridad.current.classList.toggle("selected")
        productoTecnico.current.classList.remove("selected")
        servicioComercial.current.classList.remove("selected")
        servicioTecnico.current.classList.remove("selected")
      } else if ( name === "productoTecnico"){
        general.current.classList.remove("selected")
        seguridad.current.classList.remove("selected")
        productoTecnico.current.classList.toggle("selected")
        servicioComercial.current.classList.remove("selected")
        servicioTecnico.current.classList.remove("selected")
      } else if ( name === "servicioComercial"){
        general.current.classList.remove("selected")
        seguridad.current.classList.remove("selected")
        productoTecnico.current.classList.remove("selected")
        servicioComercial.current.classList.toggle("selected")
        servicioTecnico.current.classList.remove("selected")
      }
      else if ( name === "servicioTecnico"){
        general.current.classList.remove("selected")
        seguridad.current.classList.remove("selected")
        productoTecnico.current.classList.remove("selected")
        servicioComercial.current.classList.remove("selected")
        servicioTecnico.current.classList.toggle("selected")
      }      
  };
  
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
            <a onClick={() => changeStateClass(names[0])} ref={general} className="selected" href="#">
              <div className="option">
                <span title="General" className="material-icons-outlined">
                  tips_and_updates
                </span>
                <h4>General</h4>
              </div>
            </a>
            <a onClick={() => changeStateClass(names[1])} ref={seguridad} href="#">
              <div className="option">
                <span title="Seguridad" className="material-icons">
                  lock
                </span>
                <h4>Seguridad</h4>
              </div>
            </a>
            <a onClick={() => changeStateClass(names[2])} ref={productoTecnico} href="#">
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
            <a onClick={() => changeStateClass(names[3])} ref={servicioComercial} href="#">
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
            <a onClick={() => changeStateClass(names[4])} ref={servicioTecnico} href="#">
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

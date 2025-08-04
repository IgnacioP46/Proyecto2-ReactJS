import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoAdges from "../../assets/logo ADGES B.png";
import {useHoraActual} from "../../hooks/UseHoraActual"

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { hora, fecha, temperatura } = useHoraActual();

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logoAdges} alt="Logo ADGES" className="logo-navbar" />
        <Link to="/" className="link">
          🏠 Conócenos
        </Link>
        <Link to="/tarifas" className="link">
          Tarifas
        </Link>
        <Link to="/contacto" className="link">
          Contacto
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div className="nav-right">
        <span>{hora}</span>
        <span>{fecha}</span>
        <span>{temperatura}</span>
      </div>

      {/* Menú desplegable solo visible en tablets y móviles */}
      <div
        className={`menu-desplegable ${menuAbierto ? "abierto" : ""}`}
        onClick={() => setMenuAbierto(false)}
      >
        <Link to="/">🏠 Conócenos</Link>
        <Link to="/tarifas">Tarifas</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;

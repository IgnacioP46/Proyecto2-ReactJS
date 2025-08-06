import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useHora from "../../hooks/useHora";
import logo from "../../assets/logo ADGES B.png";

const Navbar = () => {
  const hora = useHora();
  const fecha = new Date().toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
  });

  const [temperatura, setTemperatura] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current_weather=true"
    )
      .then((res) => res.json())
      .then((data) => setTemperatura(data.current_weather.temperature));
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo ADGES" className="logo-navbar" />
        <Link to="/" className="link">
          <span role="img" aria-label="Inicio">
            🏠
          </span>{" "}
          Conócenos
        </Link>
        <Link to="/tarifas" className="link">
          Tarifas
        </Link>
        <Link to="/contacto" className="link">
          Contacto
        </Link>
      </div>

      <div className={`menu-desplegable ${menuAbierto ? "abierto" : ""}`}>
        <Link to="/" onClick={() => setMenuAbierto(false)}>
          🏠 Conócenos
        </Link>
        <Link to="/tarifas" onClick={() => setMenuAbierto(false)}>
          Tarifas
        </Link>
        <Link to="/contacto" onClick={() => setMenuAbierto(false)}>
          Contacto
        </Link>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>
      <div className="nav-right">
        <span>🕒{hora}</span>
        <span>📅{fecha}</span>
        {temperatura !== null && <span>🌡️{temperatura}°C</span>}
      </div>
    </nav>
  );
};

export default Navbar;

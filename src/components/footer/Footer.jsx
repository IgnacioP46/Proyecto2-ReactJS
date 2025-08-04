import React from "react";
import "./Footer.css";
import logoColegio from "../../assets/logoColegioA.jpg";
import logoAdmin from "../../assets/logoAdmin.png";
import logoAntigo from "../../assets/logo_antigo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contacto">
        <p>📞 914463700</p>
        <p>📧 adges.admin@gmail.com</p>
      </div>
      <div className="footer-logos">
        <img src={logoColegio} alt="Logo Colegio" />
        <img src={logoAdmin} alt="Logo Admin" />
        <img src={logoAntigo} alt="Logo Antiguo" />
      </div>
    </footer>
  );
}

export default Footer;

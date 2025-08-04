import React from "react";
import Hero from "../components/hero/Hero";
import "../components/hero/Hero.css";
import "./Conocenos.css";
import logo from "../assets/faviconAdges2.png";

function Conocenos() {
  return (
    <div className="conocenos-container">
      <Hero />
      <h1 className="titulo-conocenos">
        <img src={logo} alt="ADGES Logo" className="logo-h1" />
        Administración de Fincas ADGES
      </h1>
      <section className="contenido">
        <h2>CONOCENOS</h2>
        <p>
          ADGES es una empresa familiar con sede en Madrid, especializada en la administración de fincas. Ofrecemos una atención cercana a los propietarios, gestión contable, asesoramiento integral y gestión administrativa. Nuestro compromiso es hacer de tu comunidad un lugar donde te sientas en casa.
        </p>
      </section>
    </div>
  );
}

export default Conocenos;

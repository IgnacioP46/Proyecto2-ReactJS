import React from "react";
import "./Tarifas.css";

function Tarifas() {
  return (
    <main className="tarifas">
      <section>
        <h2 className="tarifas-titulo">Tarifas de Administración de Fincas</h2>
        <p className="tarifas-desc">
          Ofrecemos precios competitivos adaptados a las necesidades de cada comunidad de vecinos. Estos son algunos ejemplos de nuestras tarifas orientativas:
        </p>

        <div className="tarifa-card">
          <h3>Comunidad Pequeña</h3>
          <ul>
            <li>Hasta 10 vecinos</li>
            <li>70€ / mes</li>
            <li>Incluye gestión contable y visitas trimestrales</li>
          </ul>
        </div>

        <div className="tarifa-card">
          <h3>Comunidad Mediana</h3>
          <ul>
            <li>De 11 a 30 vecinos</li>
            <li>90€ / mes</li>
            <li>Incluye gestión contable, incidencias y visitas bimensuales</li>
          </ul>
        </div>

        <div className="tarifa-card">
          <h3>Comunidad Grande</h3>
          <ul>
            <li>Más de 30 vecinos</li>
            <li>Desde 120€ / mes</li>
            <li>Incluye atención continua, gestión completa y reuniones ilimitadas</li>
          </ul>
        </div>

        <p className="tarifas-nota">
          Para tarifas personalizadas, no dudes en <a href="/contacto">contactar con nosotros</a>.
        </p>
      </section>

      <section className="servicios">
        <div className="service-item">
          <h3>Atención a los Propietarios</h3>
          <p>Brindamos una atención personalizada y cercana a cada uno de los propietarios.</p>
        </div>

        <div className="service-item">
          <h3>Gestión Contable</h3>
          <p>Manejamos todas las cuentas de tu comunidad de manera transparente y eficaz.</p>
        </div>

        <div className="service-item">
          <h3>Asesoramiento</h3>
          <p>Ofrecemos asesoramiento legal y administrativo adaptado a tus necesidades.</p>
        </div>

        <div className="service-item">
          <h3>Visitas Periódicas</h3>
          <p>Mantén tu finca en óptimas condiciones.</p>
        </div>
      </section>
    </main>
  );
}

export default Tarifas;

import React, { useEffect, useState } from "react";
import "./Hero.css";
import fallback from "../../assets/fallback.avif";

const Hero = () => {
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState(false);

  const obtenerImagen = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?query=madrid&client_id=${
          import.meta.env.VITE_UNSPLASH_KEY
        }`
      );
      const data = await res.json();
      setImagen(data.urls.regular);
      setError(false);
    } catch (err) {
      console.error("Error al obtener la imagen:", err);
      setError(true);
    }
  };

  useEffect(() => {
    obtenerImagen();
    const intervalo = setInterval(obtenerImagen, 90000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="hero">
      <img
        src={error || !imagen ? fallback : imagen}
        alt="Imagen de Madrid"
        className="hero-img"
      />
    </section>
  );
};

export default Hero;

import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Formulario.css";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado",
      text: "Tu mensaje ha sido enviado correctamente. Te responderemos pronto.",
      confirmButtonColor: "#f5b301",
    });
    console.log(data);
    reset();
  };

  return (
    <div className="formulario-card">
      <h2 className="formulario-titulo">Contáctanos</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="campo">
          <label>
            Nombre <span className="obligatorio">(obligatorio)</span>
          </label>
          <input
            type="text"
            placeholder="Introduce tu nombre completo"
            {...register("nombre", {
              required: "El nombre es obligatorio",
            })}
            className={errors.nombre ? "input-error" : ""}
          />
          {errors.nombre && (
            <p className="mensaje-error">{errors.nombre.message}</p>
          )}
        </div>

        <div className="campo">
          <label>
            Correo <span className="obligatorio">(obligatorio)</span>
          </label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            {...register("correo", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Formato de correo no válido",
              },
            })}
            className={errors.correo ? "input-error" : ""}
          />
          {errors.correo && (
            <p className="mensaje-error">{errors.correo.message}</p>
          )}
        </div>

        <div className="campo">
          <label>
            Asunto <span className="obligatorio">(obligatorio)</span>
          </label>
          <select
            {...register("asunto", {
              required: "Selecciona un asunto",
            })}
            className={errors.asunto ? "input-error" : ""}
          >
            <option value="">-- Selecciona un asunto --</option>
            <option value="contrataciones">Contrataciones</option>
            <option value="averias">Averías</option>
            <option value="contacto">Contacto</option>
          </select>
          {errors.asunto && (
            <p className="mensaje-error">{errors.asunto.message}</p>
          )}
        </div>

        <div className="campo">
          <label>
            Mensaje <span className="obligatorio">(obligatorio)</span>
          </label>
          <textarea
            placeholder="Escribe tu mensaje (mínimo 10 caracteres)"
            {...register("mensaje", {
              required: "El mensaje es obligatorio",
              minLength: {
                value: 10,
                message: "Debe tener al menos 10 caracteres",
              },
            })}
            className={errors.mensaje ? "input-error" : ""}
          />
          {errors.mensaje && (
            <p className="mensaje-error">{errors.mensaje.message}</p>
          )}
        </div>

        <div className="campo">
          <label>
            Archivo <span className="opcional">(opcional)</span>
          </label>
          <input type="file" {...register("archivo")} />
        </div>

        <button type="submit" disabled={!isValid}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;

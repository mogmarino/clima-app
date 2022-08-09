import React from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Loading from "./Loading";
import useClima from "../hooks/useClima";

const AppClima = () => {
  const { resultado, cargando, alerta } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {cargando ? (
          <Loading />
        ) : resultado?.name ? (
          <Resultado />
        ) : alerta ? (
          <p>{alerta}</p>
        ) : (
          <p>El clima se va a mostrar aqui</p>
        )}
      </main>
    </>
  );
};

export default AppClima;

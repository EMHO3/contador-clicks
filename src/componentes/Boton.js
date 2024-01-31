import React from "react";
import "../hojas-estilo/Boton.css"

function Boton({texto,BotondeClick,manejarclick}){
    return(
        <button
          className={BotondeClick? 'boton-click':'boton-reiniciar'}
          onClick={manejarclick}>
          {texto}
        </button>
    ); 
}

export default Boton;
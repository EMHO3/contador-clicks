import React from "react";
import "../hojas-estilo/contador.css"

function Contador({numeroClics}){
    return(
      <div className="contador">
        {numeroClics}
      </div>
    );
}

export default Contador;
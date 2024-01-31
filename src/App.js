import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import { useState } from 'react';
//hacer cd a: contador-clicls en la terminal
//luego hacer: npm start

function App() {
  const[numeroClics,setNumeroClics]= useState(0);

  const manejarclick=()=>{
    setNumeroClics (numeroClics+5);
  }
  const reiniciarContador=()=>{
    setNumeroClics(0);
  }

  return (
    <div className='App'>
      <div className='freedodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Lodo de freeCodeCamp'/>
      </div>
      <div className='Principal'>
        <Contador numeroClics={numeroClics}/>
        <Boton
         texto='click'
         BotondeClick={true}
         manejarclick={manejarclick}/>
        <Boton
         texto='Reiniciar'
         BotondeClick={false}
         manejarclick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;

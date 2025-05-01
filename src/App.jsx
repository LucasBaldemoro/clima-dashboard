import { useState, useEffect } from "react";
import Div2 from "./assets/ClimaElementos/Parte2.jsx";
import Contenedor4 from "./assets/ClimaElementos/Div4.jsx";
import Entrada from "./assets/ClimaElementos/cabezera.jsx"
import "./App.css";

function App() {
  const [personaje, setPersonaje] = useState([]);
  const [busqueda, setBusqueda] = useState(42833)












  useEffect(() => {
    fetch(
      `https://api.tutiempo.net/json/?lan=es&apid=z5Ya4X4Xaaa9S0X&lid=42833`)
      .then((response) => response.json())
      .then((data) => setPersonaje(data));


  }, []);



  console.log(personaje)




  const { locality = busqueda, information, hour_hour, copyright, language, use, web, ...rest } = personaje



  console.log(locality, "no")





  return (
    <>
      <main>


        {((locality && information) && (rest && hour_hour)) ? (

          <div className="parent">
            <Entrada />
            <Div2 carateristicas={information} fecha={hour_hour} />

            <Contenedor4 diasSemana={rest} horaDia={hour_hour} />

          </div>
        ) : (
          <p>Cargando datos...</p>
        )}












      </main >
    </>
  );
}

export default App;

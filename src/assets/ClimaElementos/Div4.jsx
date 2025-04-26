import WeatherChart from "./WeatherChart";
import Contenedor3 from "./Div3.jsx";

function Contenedor4({ diasSemana, horaDia }) {

  const weatherData = [
    { day: "Lun", temp: 22 },
    { day: "Mar", temp: 25 },
    { day: "Mié", temp: 20 },
    { day: "Jue", temp: 18 },
    { day: "Vie", temp: 23 },
    { day: "Sáb", temp: 27 },
    { day: "Dom", temp: 24 },
  ];




  return (
    <div className="div4">
      <Contenedor3 fecha={horaDia} />

      <div className="contenedor-dias">
        <div className="tarjeta-dia">
          <h3>LUNES</h3>

          <img src={`https://v5i.tutiempo.net/wi/01/${50}/${diasSemana.day1.icon}.png`} alt="Icono del día" />
          <p> MAX:{diasSemana.day1.temperature_max}   /   MIN:{diasSemana.day1.temperature_min}


          </p>
        </div>
        <div className="tarjeta-dia">
          <h3>MARTES</h3>

          <img src={`https://v5i.tutiempo.net/wi/01/${50}/${diasSemana.day2.icon}.png`} alt="Icono del día" />

          <p> MAX:{diasSemana.day2.temperature_max}   /   MIN:{diasSemana.day2.temperature_min}


          </p>

        </div>
        <div className="tarjeta-dia">

          <h3>MIERCOLES</h3>
          <img src={`https://v5i.tutiempo.net/wi/01/${50}/${diasSemana.day3.icon}.png`} alt="Icono del día" />

          <p> MAX:{diasSemana.day3.temperature_max}   /   MIN:{diasSemana.day3.temperature_min}


          </p>
        </div>
        <div className="tarjeta-dia">
          <h3>JUEVES</h3>
          <img src={`https://v5i.tutiempo.net/wi/01/${50}/${diasSemana.day4.icon}.png`} alt="Icono del día" />

          <p> MAX:{diasSemana.day4.temperature_max}   /   MIN:{diasSemana.day4.temperature_min}


          </p>
        </div>
        <div className="tarjeta-dia">
          <h3>VIERNES</h3>
          <img src={`https://v5i.tutiempo.net/wi/01/${50}/${diasSemana.day5.icon}.png`} alt="Icono del día" />


          <p> MAX:{diasSemana.day5.temperature_max}   /   MIN:{diasSemana.day5.temperature_min}


          </p>
        </div>
      </div>
    </div>
  )
}


export default Contenedor4
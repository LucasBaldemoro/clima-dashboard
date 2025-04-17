function Contenedor3({fecha}) {
    return(
        <div className="div3">
        <div className="div3DetallesDe">
          <p> DIA</p>
          <p>Pronostico</p>

        </div>
        <div className="div3DetallesDe">

        <span>{fecha.hour24.date}</span>

          <span>{fecha.hour24.text}</span>
        </div>
      </div>
    )
}


export default Contenedor3
function Div2({ fecha, carateristicas }) {

    return (

        <div className="div2">
            <div className="Parte1">
                <div className="DetalleTiempo">

                    <div className="TiempoElemento">
                        <img src="src/assets/iconosClima/humedad.svg"></img>
                        <p>
                            {fecha.hour24.humidity} {carateristicas.humidity}
                        </p>
                    </div>


                </div>
                <div className="DetalleTiempo">

                    <div className="TiempoElemento">

                        <img src="src/assets/iconosClima/Temperatura.svg"></img>
                        <p>

                            {fecha.hour24.temperature} {carateristicas.temperature}
                        </p>

                    </div>



                </div>





            </div>


            <hr></hr>


            <div className="Parte2">

                <div className="DetalleTiempo">

                    <div className="TiempoElemento">
                        <img src="src/assets/iconosClima/viento.svg"></img>
                        <p>
                            {fecha.hour24.wind_direction}
                        </p>
                    </div>


                </div>
         
         

            </div>


        </div>
    )

}





export default Div2
import { useState } from "react"

function Entrada({ serch }) {
    const [fecha, setfecha] = useState(new Date());



    return (


        < div className="div1" >
            <div className="izquierdaContenedor">
                <div className="Cabezera">
                    <div className="InfoContenedor">
                        <div className="infomas">
                            <div className="InfoContenedorDetalle">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CentroContenedor">



                <h2>MI PANEL <span className="calorTitulo">DEL TIEMPO</span></h2>

            </div>
            <div className="izquierdaContenedor">
                <div className="Cabezera">
                    <div className="InfoContenedor">
                        <div className="infomas">
                            <div className="InfoContenedorDetalle">
                                <h3>¡ Hellow Usario!</h3>
                                <span>Bienvenido de nuevo</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fecha">
                    <p>



                        <span>{fecha.toDateString()}</span>


                    </p>

                </div>
            </div>
        </div >





    )


















}


export default Entrada
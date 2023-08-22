import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css"
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

    //Deestructuración del código, escribimos la prop con el nombre tal y como aparece en componentes, lo encerramos en llaves {}  y asignamos
    //El valor de props. Podemos encontrar este nombre dentro del archivo padre o en herramientas de desarrollador React.

    
    const {colorPrimario, colorSecundario, titulo, id} = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }



    //Utilizamos return, con <> </>, estos reciben el nombre de fragmentos, también podemos escribirlos como <React.Fragment>...</React.Fragment>
    //Esyos fragmentos llevan dentro de si a un condicional, el cual se mimetiza con el valor de colaboradores.length, si colaboradores en
    //Este equipo tiene un valor mayor que sero && se vuelve true y retorna nuestra section, si no es así, la section de aquél equipo no
    //Aparecerá, esto será de ayuda para no saturar la página con secciones vacías que aún no tienen personal.

    return <>{
        
        colaboradores.length > 0 &&
        <section className="Equipo" style={obj}>

            <input 
            className="input-color"
            type='color'
            value={colorPrimario}
            onChange={(event)=>{
                actualizarColor(event.target.value, id)
            }}

            />

            <h3 style={{ borderColor: colorPrimario }}>{props.datos.titulo}</h3>
            <div className="colaboradores">

                {
                    colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario ={colorPrimario}
                    eliminarColaborador = {eliminarColaborador}
                    like={like}
                    
                    />)
                }
 
            </div>
        </section>
    }
    </>
}

        export default Equipo;
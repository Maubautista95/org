import './Colaborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
//importamos AiFillCloseCircle desde una carpeta ubicada en node-modules>react-icons/ai, importamos este ícono a modo de objeto.


const Colaborador = (props) =>{


    //De-estructuración del código, escribimos la propr con el nombre que recibe aquí en este documento, encerramos en {} y asignamos props, o
    //props.array en caso de que la prop provenga de un array de objetos como props.datos.

    const {nombre, puesto, foto, equipo, id, fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>{eliminarColaborador(id)}} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>

            <img src={foto} alt={nombre}></img>

        </div>

        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>

        {fav ? <AiFillHeart color='red' onClick={()=>{like(id)}} /> : <AiOutlineHeart onClick={()=>{like(id)}}/>}
            
            
            
        </div>


    </div>

}

export default Colaborador;
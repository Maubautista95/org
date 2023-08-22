import "./ListaOpciones.css"

const ListaOpciones = (props) =>{

    /*Método map -> arreglo.map((elemento, indiceDelElemento) =>{
    //  return <option></option>

    El método map se encarga de medir y recorrer el array, y si es necesario lleva a cabo la lógica que elijamos, para este caso es retornar cada option.
    //}) 
    
    */


    const manejarCambio = (e)=>{
        console.log('Cambio', e.target.value);
        props.actualizarEquipo(e.target.value);

    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index)=>{
               return <option key={index} value={equipo.titulo}>{equipo}</option>

            })}
        </select>
    </div>


}

export default ListaOpciones;
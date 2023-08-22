import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {

    
    console.log("datos", props)
    const placeHolderModificado = `${props.placeholder}...`

    //Deestructuración

    const {type ="text"} = props
    //Con esta linea logramos definir que por defecto el type de nuestros campoTexto sea text
    //Todo con un prop que definimos aquí mismo en CampoTexto.js

       
    const manejarCambio = (e)=>{
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
    <label>{props.titulo}</label>
    <input placeholder = {placeHolderModificado}
    required={props.required}
    value={props.valor}
    onChange={manejarCambio}
    type={type}
    >
    </input>

    </div>

}

export default Campo;


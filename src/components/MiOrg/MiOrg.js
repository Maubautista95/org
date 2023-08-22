import {useState} from "react";
import "./MiOrg.css"

const MiOrg = (props) =>{
    //Estado - hooks
    //useState
    //useState
    console.log(props)
    //const [nombreVariable, funcionActualizadora] = useState (valorInicial);
    /*
    const [mostrar, actualizarMostrar] = useState(true);
    
    const manejarClick = () =>{

        console.log('Mostrar/Ocultar elemento', !mostrar);
        actualizarMostrar(!mostrar);

    }
    */

    return <section className="org-section">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.svg" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;
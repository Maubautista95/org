import { useState } from "react";
import "./formulario.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../lista-opciones/ListaOpciones";
import Boton from "../Boton/Boton";
import App from "../../App";



const Formulario = (props) => {


    const [nombre, actualizarNombre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState('');
    const [equipo, actualizarEquipo] = useState('');

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");


    const { crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log("Manejar el envio", evento);

        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo

        }
        props.registrarColaborador(datosAEnviar);
    }


    const manejarNuevoEquipo = (e) =>{

        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color})

    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crear el colaborador.</h2>

            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}


            />


            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}

            />
            <ListaOpciones

                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}


            />
            <Boton>
                Crear
            </Boton>
        </form>


        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>

            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />

            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hexadecimal"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type= "color"
            />

            <Boton>
                Registrar Equipo
            </Boton>
        </form>



    </section>


}

export default Formulario;
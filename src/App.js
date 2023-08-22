import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/header/header.js';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Colaborador from './components/Colaborador/Colaborador';
import Footer from './components/Footer/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const [colaboradores, actualizarColaboradores] = useState([
    
    {
      id: uuidv4(),
      equipo: 'Front End',
      foto: 'https://github.com/harlandlohora.png',
      nombre: 'Harland Lohora',
      puesto: 'Instructor',
      fav: false
     },
     {
      id: uuidv4(),
      equipo: 'Programación',
      foto: 'https://media.licdn.com/dms/image/D4D03AQEQ5DGPEu63pQ/profile-displayphoto-shrink_800_800/0/1666749321927?e=1697673600&v=beta&t=REVDDfIBvfBvGkUJbAurWk77rv53CkUt0WmYsl1oU_Y',
      nombre: 'Genesys Rondon',
      puesto: 'Instructora',
      fav: true
      
     },
     
     {
      id: uuidv4(),
      equipo: 'UX y Diseño',
      foto: 'https://github.com/JeanmarieAluraLatam.png',
      nombre: 'Jean Marie Quijada',
      puesto: 'Instructora',
      fav: false
     },
     {
      id: uuidv4(),
      equipo: 'Programación',
      foto: 'https://github.com/christianpva.png',
      nombre: 'Christian Velasco',
      puesto: 'Head de Alura Latam e Instructor',
      fav: true
     },
     {
      id: uuidv4(),
      equipo: 'Innovación y gestión',
      foto: 'https://github.com/JoseDarioGonzalezCha.png',
      nombre: 'Jose Gonzales',
      puesto: 'Instructor',
      fav: false
     }
  
    ]);
  
  const [equipos, actualizarEquipos] = useState ([

    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }

  ]
  )

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador)=>{
    console.log('Nuevo colaborador', colaborador)
  /*El spread operator [...colaboradores, colaborador]. 
  Esto crea una nueva copia del array colaboradores y agrega el nuevo objeto colaborador al final de esa copia.*/
      actualizarColaboradores([... colaboradores, colaborador]);
    }

  //Actualizar color de equipo

  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id);

    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados);
  }

  //Like

  const like = (id)=>{
    console.log("like", id)

    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }


  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])


  }



  //Eliminar Colaborador

  const eliminarColaborador = (id) =>{

    console.log("eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador)=>{
      return colaborador.id !== id
    })
    actualizarColaboradores(nuevosColaboradores);
  }

  // return colaborador.id !== id retorna todos los colaboradores cuyo id no coincida con aquél cuya acción desencadenó el evento.
  // Abajo usamos el Spread operator que actualiza todos los colaboradores a su estado actual con la nueva lista, los elementos con el mismo id
  // que no era igual al que accionó todo, siguen apareciendo, mientras que aquellos que no, son eliminados.

  //Lista de equipos.


//Ternario --> condicion ? seMuestra : noSeMuestra.

  return (
    <div>

      <Header />
      
      {mostrarFormulario === true ? <Formulario
       equipos={equipos.map((equipo)=> equipo.titulo)}
       registrarColaborador={registrarColaborador}
       crearEquipo={crearEquipo}
       /> : <></>}
       
      
      

      <MiOrg cambiarMostrar={cambiarMostrar} />


       {
        //Si la etiqueta Equipo está en la misma línea, será equivalente a un Return.
        //Usamos el método filter para el el array colaboradores, en la sintaxis dentro del paréntesis expresamos que usaremos el parámetro
        //singular colaborador donde colaborador.equipo debe ser equivalente a equipo.titulo, así mandamos este prop hacia equipo, donde en
        //equipo pasa hacia colaborador con colaboradores.map
        
        equipos.map((equipo)=>{
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
          
          />
        })
       }
     


       <Footer />
    </div>
  );
}

export default App;
//A la izquierda en una prop, va el nombre de la prop, y a la derecha, va el nombre que recibe la constante dentro de nuestro documento actual.
//Edition for Vercel.
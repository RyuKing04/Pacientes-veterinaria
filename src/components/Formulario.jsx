import {useState,useEffect}from 'react';
import Error from './Error';
function Formulario(pacientes,setPacientes) {

const [nombre, setNombre] = useState('');
const [propietario, setPropietario] = useState('');
const [email, setEmail] = useState('');
const [fecha, setFecha] = useState('');
const [sintomas, setSintomas] = useState('');
const [error,setError] =useState(false);


const handleSubmit = (e)=>{
  e.preventDefault();
    if([nombre,propietario,email,fecha,sintomas].includes('')){
  console.log('Hay campos vacios');

  setError(true);
    return;
  }
  setError(false);

const objetoPacinte = { 
  nombre, propietario,email,fecha,sintomas
}

  setPacientes([...pacientes,objetoPacinte]);
  
  
setNombre('')
setPropietario('')
setEmail('')
setFecha('')
setSintomas('')
}




  return (
    <div className="mid:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento</h2>
      <p className="text-xl mt-5 text-center mb-10 ">
        Añade Pacientes y {""}
        <span className="text-indigo-600">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit} >
        {error && <Error />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota 
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            className="borde-2 w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="cliente"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="cliente"
            placeholder="Nombre del propietario"
            className="borde-2 w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e)=>setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email Contacto Propietario"
            className="borde-2 w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
           Alta
          </label>
          <input
            type="date"
            id="alta"
            className="borde-2 w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md font-sans"
            value={fecha}
            onChange={(e)=>setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
           Sintomas
          </label>
        <textarea name="" id="sintomas" placeholder="Describe los sintomas" 
            className="borde-2 w-11/12 p-2 mt-2 placeholder-gray-400 rounded-md font-sans" 
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)} ></textarea>
        </div>
        
        <input type="submit" 
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors "
        value="Agregar Paciente"
        
        />
      </form>
    </div>
  );
}

export default Formulario;

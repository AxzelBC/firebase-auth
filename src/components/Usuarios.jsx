import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    const obtenerUsuario = async() =>{
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users     = await respuesta.data;
        setUsuarios(users);
    }

    useEffect( ()=>{
        obtenerUsuario();
    },[]);

  return (
    <div>
        <h2>Lista de Usuarios</h2>
        {
            //usuarios.map( (item,index) => (
            //    <div key={index}>
            //        <Link to={`/usuario/${item.id}`}>{item.name}</Link>
            //    </div>
            //))

            usuarios.map( (item,index) => (
                <div key={index}>
                    <Link to={`/usuario/${item.id}`}>
                        {item.name}
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default Usuarios
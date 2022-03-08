import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Usuario = () => {

    const [usuario, setUsuario] = useState([]);
    const {id} = useParams();

    const obtenerUsuario = async() =>{
        const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const users     = await respuesta.data;
        setUsuario(users);
    }

    useEffect( ()=>{
        obtenerUsuario();
    },[]);

  return (
    <div>
        <h4>Usuario</h4>

        <h2>Nombre: {usuario.name}</h2>
        <h2>email: {usuario.email}</h2>
        <h2>Telefono: {usuario.phone}</h2>
        <h2>WebSite: {usuario.website}</h2>
    </div>
  )
}

export default Usuario
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseconfig';


const Menu = () => {
    const navigate = useNavigate();
    const [usuario, setusuario] = useState(null);

    useEffect( () => {
        onAuthStateChanged(auth, ( (user) => {
            if (user) {
                setusuario(user.email);
                console.log(user.email)
            }
        }))
    },[])


    const cerrarSesion = () => {
        signOut(auth);
        setusuario(null);
        navigate('/');
    }


  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>Inicio</Link>
                </li>
                <li className='nav-item'>
                    {
                        !usuario ?
                        (
                            <Link className='nav-link' to='/login'>Login</Link>
                        )
                        :
                        (
                            <span></span>
                        )
                    }
                    {/* <Link className='nav-link' to='/login'>Login</Link> */}
                </li>
                <li className='nav-item'>
                    {
                        usuario ?
                        (
                            <Link className='nav-link' to='/admin'>Admin</Link>
                        )
                        :
                        (
                            <span></span>
                        )
                    }
                    {/* <Link className='nav-link' to='/admin'>Admin</Link> */}
                </li>
            </ul>
            {
                usuario ?
                (
                    <button
                        className='btn btn-danger'
                        onClick={cerrarSesion}>
                            Cerrar sesión
                    </button>
                )
                :
                (
                    <span></span>
                )
            }
        </nav>
    </div>
  )
}

export default Menu
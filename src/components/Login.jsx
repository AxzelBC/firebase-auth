import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebaseconfig';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [msgError, setMsgError] = useState(null);

    const registrarUsuario = (e) =>{
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth,email,pass)
            .then( r => {
                navigate('/');
            })
            //Firebase: Error (auth/invalid-email).
            //Firebase: Password should be at least 6 characters (auth/weak-password).
            .catch( e => {
                if (e.code === 'auth/invalid-email') {
                    setMsgError('Formato de Email incorrecto');
                }
                if (e.code === 'auth/weak-password') {
                        setMsgError('Contraseña muy corta. Minimo 6 caracteres');
                }
            })
    }

    const loginUsuario = () => {
        signInWithEmailAndPassword(auth,email,pass)

            .then( (r) => {
                navigate('/');
            })
            .catch( (err) => {
                //Firebase: Error (auth/wrong-password)
                if (err.code === 'auth/wrong-password') {
                    setMsgError('Contraseña incorrecta');
                }
                //Firebase: Error (auth/user-not-found).
                if (err.code === 'auth/user-not-found') {
                    setMsgError('El usuario no existe');
                }
                console.log(err)
        })
    }

  return (
    <div className='row mt-5'>
        <div className="col"></div>

        <div className="col">
            <form onSubmit={registrarUsuario} className='form-group d-grid'>
                <input 
                    onChange={(e) => { setEmail(e.target.value) }}
                    className='form-control'
                    placeholder='Introduce el Email' 
                    type="email" />
                <input 
                    onChange={(e) => { setPass(e.target.value) }}
                    className='form-control mt-4' 
                    placeholder='Introduce la contraseña' 
                    type="password" />
                <input className='btn btn-dark btn-block mt-4' type="submit" value="Registrar usuario" />
            </form>
            <button 
                className='btn btn-success btn-block mt-3'
                onClick={loginUsuario}>
                    Iniciar sesión
            </button>


            {
                msgError != null ?
                    (
                        <div className='alet alert-danger mt-2'>{msgError}</div>
                    )
                    :
                    (
                        <span></span>
                    )
            }
        </div>

        <div className="col"></div>
    </div>
  )
}

export default Login
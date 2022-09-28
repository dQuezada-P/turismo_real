import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from '../context/hooks/useAuth';
import { AuthUser } from '../services/auth/auth.js';

export const Login = () => {
  const { user, setUser, isLogged, setIsLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { 
    if (isLogged) {
      console.log("Está logueado")
      setTimeout(()=>{
        navigate('/departamentos');
      },1000)
    }
    else console.info('No se ha logueado');
  }, [isLogged])

  const username = useFormInput('');
  const password = useFormInput('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      correo: username.value,
      password: password.value
    }

    await AuthUser(data)
    .then(res => {
      setIsLogged(res.auth)
      if (res.auth)
        setUser(res.user)
    })
    
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          {...username} //Value and onChange
        />
        <input
          type='text'
          name='username'
          placeholder='Username'
          {...password} //Value and onChange
        />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

// Set: useState
// Return: Value and onChange input event, setting new value
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({target}) => {
    setValue(target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

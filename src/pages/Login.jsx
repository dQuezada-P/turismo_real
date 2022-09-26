import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from '../context/hooks/useAuth';
import { AuthUser } from '../services/auth/auth.js';

export const Login = () => {
  const { user, setUser, isUser } = useAuth();
  const navigate = useNavigate();
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
      setUser(res)
      
      console.log(user)

      if (isUser()) {
        console.log("Está logueado")
        setTimeout(()=>{
          navigate('/departamentos');
        },5000)
      }
      else console.error('No se ha logueado');
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

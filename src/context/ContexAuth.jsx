import { useState, createContext, useEffect } from "react";
import { HttpPost } from "../services/ApiRequest";

const Auth = createContext();
const ContextAuth = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] =useState(true) 

    const isLogged = () => {
        return token && user
    } 

    const verifyToken = async () => {
        console.log('token')
        console.log(token)
        await HttpPost('/auth/verify-login', { login: true } , token).then((user) => {
            setUser(user);
        });
    }

    useEffect(()=>{
        if (token && !user)
        {
            console.log('verificar token')
            verifyToken();
        }
        
    },[user, token])

    return (
        <Auth.Provider value={{ user, setUser, token, setToken, isLogged ,showModal, setShowModal}} >
            {children}
        </Auth.Provider>
    );
};

export { ContextAuth };
export default Auth;

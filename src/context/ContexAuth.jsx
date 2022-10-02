import { useState, createContext, useEffect } from "react";
import { HttpGet } from "../services/ApiRequest";

const Auth = createContext();
const ContextAuth = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    const isLogged = () => {
        return token && user
    } 

    const verifyToken = async () => {
        await HttpGet('/usuario', token).then((user) => {
            setUser(user);
        });
    }

    useEffect(()=>{
        if (!isLogged())
        {
            verifyToken();
        }
        
    },[user, token])

    return (
        <Auth.Provider value={{ user, setUser, token, setToken, isLogged }} >
            {children}
        </Auth.Provider>
    );
};

export { ContextAuth };
export default Auth;

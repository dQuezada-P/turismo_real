import { useState, createContext } from "react";

const Auth = createContext();
const ContextAuth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    return (
        <Auth.Provider value={{ user, setUser, isLogged, setIsLogged }} >
            {children}
        </Auth.Provider>
    );
};

export { ContextAuth };
export default Auth;

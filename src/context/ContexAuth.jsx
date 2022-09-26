import { useState, createContext } from "react";

const Auth = createContext();
const ContextAuth = ({ children }) => {
    const [user, setUser] = useState(null);

    const isUser = () => {
        return user?user:null;
    }

    return (
        <Auth.Provider value={{ user, setUser, isUser }} >
            {children}
        </Auth.Provider>
    );
};
export { ContextAuth };
export default Auth;

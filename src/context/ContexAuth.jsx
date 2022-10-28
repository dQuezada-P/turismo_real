import { useState, createContext, useEffect } from "react";
import { HttpPost } from "../services/ApiRequest";

const Auth = createContext();
const ContextAuth = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [charging, setCharging] = useState(true);

  const isLogged = () => {
    return token && user;
  };

  const verifyToken = async () => {
    console.log("token");
    console.log(token);
    try {
      await HttpPost("/auth/verify-login", { login: true }, token).then(
        (res) => {
          if (res.auth)
            setUser(res.user);
        }
      );
    } catch (error) {
      console.error(error);
    }
    setCharging(false);
  };

  useEffect(() => {
    try {
      if (token && !user) {
        console.log("verificar token");
        verifyToken();
      } else {
        setCharging(false);
      }
    } catch (error) {}
  });

  return (
    <Auth.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLogged,
        showModal,
        setShowModal,
        charging,
        setCharging,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export { ContextAuth };
export default Auth;




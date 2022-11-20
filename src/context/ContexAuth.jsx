import { useState, createContext, useEffect } from "react";
import { HttpPost } from "../services/ApiRequest";

const Auth = createContext();
const ContextAuth = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [tokenVerified, setTokenVerified] = useState(false);
  const [resToken, setResToken] = useState(false);

  const isLogged = () => {
    return token && user;
  };

  const verifyToken = async () => {
    try {
      await HttpPost("/auth/verify-login", { login: true }, token).then(
        (res) => {
          if (res.auth) setUser(res.user);
        }
      );
    } catch (error) {
      console.error(error);
    }
    setTokenVerified(true);
  };

  useEffect(() => {
    try {
      if (token && !user) {
        verifyToken();
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
        tokenVerified,
        resToken,
        setResToken,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export { ContextAuth };
export default Auth;

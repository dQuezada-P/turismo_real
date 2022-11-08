import { useState, useEffect, createContext } from "react";
import { getTransports } from "../services/transports/ApiRequestTransport";

const Transport = createContext();

const ContextTransport = ({ children }) => {
  const [transports, setTransports] = useState([]);
  const [transportList, setTransportList] = useState([]);
  useEffect(() => {
    try {
      const get = async () => {
        const listTransports = await getTransports();
        setTransports(listTransports);
      };
      get();
    } catch (error) {}
  }, []);

  return (
    <Transport.Provider
      value={{ transports, setTransports, transportList, setTransportList }}
    >
      {children}
    </Transport.Provider>
  );
};
export { ContextTransport };
export default Transport;

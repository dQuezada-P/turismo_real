import { useState, useEffect, createContext } from "react";
import { getTransports } from "../services/transports/ApiRequestTransport";

const Transport = createContext();

const ContextTransport = ({ children }) => {
  const [transportList, setTransportList] = useState([]);
  const [flagTra, setFlagTra] = useState(false);

  return (
    <Transport.Provider
      value={{
        transportList,
        setTransportList,
        flagTra,
        setFlagTra,
      }}
    >
      {children}
    </Transport.Provider>
  );
};
export { ContextTransport };
export default Transport;

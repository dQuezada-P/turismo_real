import { useState, useEffect, createContext } from "react";

const Reservation = createContext();

const ContextReservation = ({ children }) => {
  const [reservation, setReservation] = useState({});
  return (
    <Reservation.Provider value={{ reservation, setReservation }}>
      {children}
    </Reservation.Provider>
  );
};
export { ContextReservation };
export default Reservation;

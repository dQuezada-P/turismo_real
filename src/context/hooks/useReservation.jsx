import { useContext } from "react";
import Reservation from "../ContextReservation";

export const useReservation = () => {
  return useContext(Reservation);
};

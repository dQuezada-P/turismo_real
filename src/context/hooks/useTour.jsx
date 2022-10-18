import { useContext } from "react";
import Tour from "../ContextTour";

export const useTour = () => {
  return useContext(Tour);
};

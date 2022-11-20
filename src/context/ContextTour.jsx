import { useState, useEffect, createContext } from "react";
import { getTours } from "../services/tours/ApiRequestTour";

const Tour = createContext();

const ContextTour = ({ children }) => {
  const [tourList, setTourList] = useState([]);
  const [flagTr, setFlagTr] = useState(false);

  return (
    <Tour.Provider
      value={{
        tourList,
        setTourList,
        flagTr,
        setFlagTr,
      }}
    >
      {children}
    </Tour.Provider>
  );
};
export { ContextTour };
export default Tour;

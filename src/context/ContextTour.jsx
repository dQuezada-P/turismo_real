import { useState, useEffect, createContext } from "react";
import { getTours } from "../services/tours/ApiRequestTour";

const Tour = createContext();

const ContextTour = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [bkupTours, setBkupTours] = useState([]);
  const [tourList, setTourList] = useState([]);
  const [flagTr, setFlagTr] = useState(false);

  useEffect(() => {
    const get = async () => {
      try {
        const tours = await getTours();
        setTours(tours);
        setBkupTours(tours)
      } catch (error) {}
    };
    get();
  }, []);

  return (
    <Tour.Provider
      value={{
        tours,
        setTours,
        tourList,
        setTourList,
        flagTr,
        setFlagTr,
        bkupTours,
        setBkupTours,
      }}
    >
      {children}
    </Tour.Provider>
  );
};
export { ContextTour };
export default Tour;

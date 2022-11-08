import { useState, useEffect, createContext } from "react";
import { getTours } from "../services/tours/ApiRequestTour";

const Tour = createContext();

const ContextTour = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [tourList, setTourList] = useState([]);
  const [charging, setCharging] = useState(true);
  useEffect(() => {
    const get = async () => {
      try {
        const tours = await getTours();
        setTours(tours);
      } catch (error) {}
    };
    setTimeout(() => {
      setCharging(false);
    }, 1500);
    get();
  }, []);

  return (
    <Tour.Provider
      value={{ tours, setTours, charging, setCharging, tourList, setTourList }}
    >
      {children}
    </Tour.Provider>
  );
};
export { ContextTour };
export default Tour;

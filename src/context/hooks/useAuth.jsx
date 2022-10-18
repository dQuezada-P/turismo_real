import { useContext } from "react";
import Auth from "../ContexAuth";

export const useAuth = () => {
  return useContext(Auth);
};

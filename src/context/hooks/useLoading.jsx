import { useContext } from "react";
import Loading from "../ContextLoading";

export const useLoading = () => {
  return useContext(Loading);
};

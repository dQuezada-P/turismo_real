import { useContext } from "react";
import Transport from "../ContextTransport";

export const useTransport = () => {
  return useContext(Transport);
};

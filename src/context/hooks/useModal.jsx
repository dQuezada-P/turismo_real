import { useContext } from "react";
import Modal from "../ContextModal";

export const useModal = () => {
  return useContext(Modal);
};

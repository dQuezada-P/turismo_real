import { useState, createContext, useEffect } from "react";

const Modal = createContext();
const ContextModal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [params, setParams] = useState({});
  const [modalTypes, setModalTypes] = useState({info:0,alert:1});
  const [modalType, setModalType] = useState(modalTypes.info);

  useEffect(() => {
    
  },[]);

  return (
    <Modal.Provider
      value={{
        showModal,
        setShowModal,
        params,
        setParams,
        modalTypes,
        modalType,
        setModalType
      }}
    >
      {children}
    </Modal.Provider>
  );
};

export { ContextModal };
export default Modal;
import { useState } from "react";
import { Modal, Button } from "flowbite-react";

export const ModalAlert = ({onConfirmation}) => {
  const [isShowed, setIsShowed] = useState(true);

  const onConfirmationClick = () => {
    onConfirmation();
    onCloseModal();
  };

  const onCloseModal = () => {
    setIsShowed(false);
  };

  return (
    <>
      <Modal show={isShowed} size="md" popup={true} onClose={onCloseModal}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              ¿Estás seguro que deseas hacer esta acción?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={onConfirmationClick}>
                Confirmar
              </Button>
              <Button color="gray" onClick={onCloseModal}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

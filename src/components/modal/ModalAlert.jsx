import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from "flowbite-react";
import { useModal } from '../../context/hooks/useModal';

import { HiOutlineExclamationCircle } from 'react-icons/hi2';


export const ModalAlert = ({ params: {message, redirect_to = null, continue_msg, success, callback = null} }) => {
  const { setShowModal } = useModal();
  const navigate = useNavigate();

  const onContinue = () => {
    onCloseModal();
    if(callback != null)
      callback();
    if(redirect_to != null)
      navigate(redirect_to);
    
  }

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal
      show={true}
      size="md"
      popup={true}
      onClose={onCloseModal}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {message}
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color={success ? "success": "failure"}
              onClick={onContinue}
            >
              {continue_msg}
            </Button>
            <Button
              color="gray"
              onClick={onCloseModal}
            >
              Volver
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

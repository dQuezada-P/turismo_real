import { useEffect, useState } from "react";
import { Modal, Button } from "flowbite-react";

export const ModalAlertSuccess = ({ payment }) => {
  const [isShowed, setIsShowed] = useState(true);

  useEffect(() => {
    setIsShowed(true);
    return () => {};
  }, []);
  const onCloseModal = () => {
    setIsShowed(false);
  };

  return (
    <>
      <Modal show={isShowed} size="lg" popup={true} onClose={onCloseModal}>
        <Modal.Header />
        <Modal.Body>
          <div className="relative w-auto my-6 mx-auto max-w-sm font-semibold">
            <div
              className="bg-teal-200 border-t-4 border-teal-600 rounded-b text-teal-900 p-8 shadow-md"
              role="alert"
            >
              <div className="flex flex-row items-center">
                <div className="p-8 basis-2/5">
                  <svg
                    className="h-14 w-14 text-green-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="basis-3/5 w-4/5">
                  <p className="font-bold text-2xl capitalize">
                    Reserva Exitosa
                  </p>
                  <p className="text-base lining-nums ">
                    {`Departamento: ${payment.reservation.reservation.nombre}`}
                  </p>
                </div>
              </div>
              <div className="text-center">
                *Se le ha enviado un correo con el detalle de la reserva*
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

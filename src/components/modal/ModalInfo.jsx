import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "flowbite-react";
import { useModal } from "../../context/hooks/useModal";


export const ModalInfo = ({ params: {success, title, message, redirect_to} }) => {
  const { setShowModal } = useModal();
  const navigate = useNavigate();

  const onCloseModal = () => {
    setShowModal(false);
    navigate(redirect_to);
  };

  return (
    <div className="fixed w-full h-screen bg-black/[.8] z-50">
      <Modal show={true} size="lg" popup={true} onClose={onCloseModal}>
        <Modal.Header>
          { title }
        </Modal.Header>
        <Modal.Body>
          <div className="relative w-auto my-6 mx-auto max-w-sm font-semibold">
            <div
              className={
                success
                  ? "bg-teal-200 border-t-4 border-teal-600 rounded-b text-teal-900 p-8 shadow-md"
                  : "bg-red-200 border-t-4 border-red-600 rounded-b text-red-900 p-8 shadow-md"
              }
              role="alert"
            >
              <div className="flex flex-row items-center">
                <div className="p-8 basis-2/5">
                  {success ? (
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
                  ) : (
                    <svg
                      className="h-14 w-14"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 122.88 122.879"
                      enableBackground="new 0 0 122.88 122.879"
                    >
                      <g>
                        <path
                          fill="#FF4141"
                          d="M61.44,0c16.96,0,32.328,6.882,43.453,17.986c11.104,11.125,17.986,26.494,17.986,43.453 c0,16.961-6.883,32.328-17.986,43.453C93.769,115.998,78.4,122.879,61.44,122.879c-16.96,0-32.329-6.881-43.454-17.986 C6.882,93.768,0,78.4,0,61.439C0,44.48,6.882,29.111,17.986,17.986C29.112,6.882,44.48,0,61.44,0L61.44,0z M73.452,39.152 c2.75-2.792,7.221-2.805,9.986-0.026c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.077,12.25 c2.728,2.77,2.689,7.256-0.081,10.021c-2.772,2.766-7.229,2.758-9.954-0.012L61.445,71.541L49.428,83.729 c-2.75,2.793-7.22,2.805-9.985,0.025c-2.763-2.775-2.776-7.291-0.026-10.082L51.48,61.435l-12.078-12.25 c-2.726-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.954,0.013L61.435,51.34L73.452,39.152L73.452,39.152z M96.899,25.98C87.826,16.907,75.29,11.296,61.44,11.296c-13.851,0-26.387,5.611-35.46,14.685 c-9.073,9.073-14.684,21.609-14.684,35.459s5.611,26.387,14.684,35.459c9.073,9.074,21.609,14.686,35.46,14.686 c13.85,0,26.386-5.611,35.459-14.686c9.073-9.072,14.684-21.609,14.684-35.459S105.973,35.054,96.899,25.98L96.899,25.98z"
                        />
                      </g>
                    </svg>
                  )}
                </div>
                <div className="basis-3/5 w-4/5">
                  <p className="font-bold text-2xl capitalize">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

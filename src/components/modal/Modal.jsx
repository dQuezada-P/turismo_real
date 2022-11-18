import { useEffect } from "react";
import { useAuth } from "../../context/hooks/useAuth";

export default function Modal() {
  const { showModal, setShowModal } = useAuth();
  useEffect(() => {
    setTimeout(() => {
      setShowModal(false)
    }, 5500);
  });

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-purple-300 outline-none focus:outline-none">
                <div
                  className="bg-purple-300 border-4 border-purple-500 text-purple-600 relative p-10 flex-auto rounded-lg"
                  role="alert"
                >
                  <h2 className="capitalize font-bold flex flex-col text-xl text-center">
                    Debes Iniciar Sesión
                    <span className="text-slate-100">
                      Para Reservar un Departamento
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

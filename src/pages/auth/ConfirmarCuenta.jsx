import { useEffect } from "react";
import { ConfirmAccount } from "../../services/auth/auth";

import { useAuth } from "../../context/hooks/useAuth";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useLoading } from "../../context/hooks/useLoading";
import { useModal } from "../../context/hooks/useModal";




export const ConfirmarCuenta = () => {
  const { isLogged, user } = useAuth();
  const { setIsLoading } = useLoading();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");


  const navigate = useNavigate();

  useEffect(() => { 
  }, [user])

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    Promise.all([
      ConfirmAccount({token})
    ]).then(([response]) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      navigate('/login');
      setIsLoading(false);
    });
  };

  return (
    <>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl bg-white dark:bg-gray-700 dark:text-white flex items-center justify-center py-10 rounded-xl drop-shadow-xl">
          <div className="w-full px-10 space-y-8">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Valida{" "}
                <span className="text-purple-500 dark:text-yellow-300">
                  tu cuenta
                </span>{" "}
                para ofrecerte nuestros servicios!!
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={onSubmit}>
              <div className="flex flex-col justify-center gap-4">
                    

                <button
                  type="submit"
                  className="md:w-1/2 w-full block mx-auto rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-purple-600 hover:bg-purple-800 dark:bg-yellow-300 dark:hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-yellow-300 focus:ring-offset-2"
                >
                  Validar mi cuenta
                </button>

              </div>

              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

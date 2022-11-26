import { useEffect } from "react";
import { FooterContent } from "./Footer";
import { useAuth } from "../../context/hooks/useAuth";
import { useLoading } from "../../context/hooks/useLoading";
import { LoadingScreen } from "../../components/loadingScreen/LoadingScreen";

export const Content = ({ Children }) => {
  const { tokenVerified, token } = useAuth();
  const { isLoading } = useLoading();

 

  return (
    // Fondo del contenido principal
    <>
    {/* min-h-[calc(100vh - 3.5rem)] top-14 */}
      <div className="BoxMain w-full min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-88px)] top-14 bg-white dark:bg-gray-800 relative  z-20 overflow-hidden">
        <div className="Bars right-2/4 sm:right-1/4 2xl:1/3 fixed min-h-screen">
          <div className="Bar1 bg-yellow-400 shadow-2xl min-h-screen right-2/4 w-16 absolute"></div>
          <div className="Bar2 bg-purple-600 shadow-2xl min-h-screen w-16 absolute"></div>
        </div>
        <div className="relative mb-24">
        { tokenVerified ? Children : '' }
        {/* {Children} */}
        </div>
        
      </div>
      <FooterContent />
    </>
  );
};

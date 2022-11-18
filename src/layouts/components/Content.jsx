import { FooterContent } from "./Footer";

export const Content = ({ Children }) => {
  return (
    // Fondo del contenido principal
    <>
      <div className="BoxMain w-full min-h-screen bg-gray-200 dark:bg-gray-700 relative top-14 z-20 overflow-hidden">
        <div className="Bars right-2/4 sm:right-1/4 2xl:1/3 fixed min-h-screen">
          <div className="Bar1 bg-yellow-400 shadow-2xl min-h-screen right-2/4 w-16 absolute"></div>
          <div className="Bar2 bg-purple-600 shadow-2xl min-h-screen w-16 absolute"></div>
        </div>
        <div className="relative mb-24">
        {Children}
        </div>
        
      </div>
      <FooterContent />
    </>
  );
};

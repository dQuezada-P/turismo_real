import { FooterContent } from "./Footer";

export const Content = ({ Children }) => {
  return (
    // Fondo del contenido principal
    <>
      <div className="BoxMain w-full min-h-screen bg-white dark:bg-gray-700 absolute top-16 z-20 overflow-hidden">
        <div className="Bars right-2/4 sm:right-1/4 2xl:1/3 absolute ">
          <div className="Bar1 bg-yellow-400 shadow-2xl h-[20000px] right-2/4 w-16  absolute"></div>
          <div className="Bar2 bg-purple-600 shadow-2xl h-[20000px] w-16 absolute"></div>
        </div>
        {Children}
        <FooterContent />
      </div>
    </>
  );
};

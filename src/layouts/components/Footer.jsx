import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
export const FooterContent = () => {
  return (
    <footer
      className="dark:bg-gray-800 w-full bg-gradient-to-b from-purple-700 to-gray-800 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-700 "
      
    >
      <Footer
        container={true}
        className="flex flex-col sm:flex-row mx-auto container relative z-40 "
        
      >
        <div className="flex flex-row justify-center sm:items-center">
          <img
            src="/public/Logo New.png"
            className="mr-3 h-6 sm:h-14 p-1rounded-md"
            alt="Turismo Real Logo"
          />
          <span className="text-xl font-semibold dark:text-white">
            <span className="dark:text-gold-200 text-purple-600">Turismo</span>
            <span className="text-gold-200 dark:text-white">Real</span>
          </span>
        </div>
        <h2 className="hidden sm:inline font-semibold text-white">
          Turismo Real 2012 - 2022 <span className="dark:text-gold-200">©</span>
          . Todos los derechos reservados.
        </h2>
        <div className="flex flex-col justify-center items-center">
          <Footer.Copyright
            href="#"
            by="Turismo Real™"
            year={2022}
            className="text-black font-semibold sm:col-span-2 sm:hidden "
          />

          <div className="flex flex-row gap-8 mt-4 sm:col-span-1 text-white ">
            <Footer.Icon href="#" icon={BsFacebook} className="transform transition duration-300 sm:hover:scale-110" />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </Footer>
    </footer>
  );
};

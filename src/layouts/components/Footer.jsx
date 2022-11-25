import { Footer, Flowbite } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
export const FooterContent = () => {
  return (
    <footer className="mt-15 w-full bg-fondo-footer relative overflow-hidden z-30" 
      style={{
        backgroundImage: `url(https://turismoreal2.s3.amazonaws.com/Fondo.jpg)`,
        
      }}>
      <Footer container={true} className="relative z-40 w-full">
        <div className="container flex flex-col md:flex-row md:justify-between mx-auto md:gap-9 items-center">
          <div className="flex flex-row justify-center md:items-center">
            <img
              src="/public/Logo New.png"
              className="mr-3 h-6 md:h-14 p-1rounded-md"
              alt="Turismo Real Logo"
            />
            <span className="text-xl font-semibold dark:text-white">
            <span className="text-yellow-300">
                Turismo
              </span>
              <span className="text-white">Real</span>
            </span>
          </div>
          <h2 className="hidden md:inline font-semibold text-white text-center">
            Turismo Real 2012 - 2022{" "}
            <span className="dark:text-gold-200">©</span>. Todos los derechos
            reservados.
          </h2>
          <div className="flex flex-col justify-center items-center">
            <Footer.Copyright
              href="#"
              by="Turismo Real™"
              year={2022}
              className="text-black font-semibold md:col-span-2 md:hidden"
            />

            <div className="flex flex-row gap-8 mt-4 md:col-span-1 text-white  ">
              <Footer.Icon
                href="#"
                icon={BsFacebook}
                className="transform transition duration-300 md:hover:scale-110"
              />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    </footer>
  );
};

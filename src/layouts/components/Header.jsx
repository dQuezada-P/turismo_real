import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/hooks/useAuth";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";

export const Header = () => {
  const { user, isLogged } = useAuth();

  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      themeToggleDarkIcon.classList.toggle("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      themeToggleLightIcon.classList.toggle("hidden");
    }
  }, []);

  const onToggleDarkMode = (e) => {
    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }

    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");
  };
  console.log('usuarioooo')
  console.log(user)
  const navbarUser = isLogged() ? (
    <>
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={<Avatar alt="User settings" img={user.IMAGEN} rounded={true} />}
      >
        <Dropdown.Header>
          <span className="block text-sm">
            {user.NOMBRE} {user.APELLIDO}
          </span>
          <span className="block truncate text-sm font-medium">
            {user.CORREO}
          </span>
        </Dropdown.Header>
        <button
          id="theme-toggle"
          onClick={onToggleDarkMode}
          type="button"
          className="text-gray-500 ml-1 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          <svg
            id="theme-toggle-dark-icon"
            className="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            className="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <Dropdown.Divider />
        <Dropdown.Item>Perfil</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Cerrar Sesión</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </>
  ) : (
    <>
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={<Avatar rounded={true} />}
      >
        <Dropdown.Header>
          <NavLink to={"/login"} >
            <Button gradientDuoTone="purpleToBlue" className="mb-1 w-full">Iniciar Sesión</Button>
          </NavLink>
          <Button gradientDuoTone="purpleToBlue" className="w-full">Registrarme</Button>
        </Dropdown.Header>
        <button
          id="theme-toggle"
          onClick={onToggleDarkMode}
          type="button"
          className="text-gray-500 ml-3 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          <svg
            id="theme-toggle-dark-icon"
            className="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            className="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </Dropdown>
      <Navbar.Toggle />
    </>
  );

  const currentLocation = useLocation().pathname;

  return (
    <header className="fixed z-30 top-0 w-full">
      <Navbar fluid={false} rounded={false}>
        <NavLink to={"/"}>
          <Navbar.Brand>
            <img
              src="/public/logo.png"
              className="mr-3 h-6 sm:h-11 p-1rounded-md"
              alt="Turismo Real Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <span className="dark:text-gold-200 text-purple-600">
                Turismo
              </span>
              <span className="text-gold-200 dark:text-white">Real</span> 
            </span>
          </Navbar.Brand>
        </NavLink>
        <div className="flex md:order-2 gap-2">{navbarUser}</div>
        <Navbar.Collapse className="text-lg text-center">
          
            <Navbar.Link active={currentLocation == "/departamentos"} >
              <NavLink to="/departamentos" >
                Departamentos
              </NavLink>
            </Navbar.Link>
          
          <NavLink to="/tours">
            <Navbar.Link active={currentLocation == "/tours"} >
              Tours
            </Navbar.Link>
          </NavLink>
          <NavLink to="/nosotros">
            <Navbar.Link active={currentLocation == "/nosotros"}>
              Nosotros
            </Navbar.Link>
          </NavLink>
          <NavLink to="/contactanos">
            <Navbar.Link active={currentLocation == "/contactanos"}>
              Contactanos
            </Navbar.Link>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

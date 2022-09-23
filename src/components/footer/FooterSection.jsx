import { NavLink , useLocation } from "react-router-dom";


export default function FooterSection(props) {
  const location = useLocation();
  const urlLocation = location.pathname;

  return (
    <>
      <NavLink
        className={`${urlLocation === props.url ? 'my-2 m-auto w-10/12 text-center block rounded-lg px-2 md:text-centershadow-lg md:transition md:ease-in-out md:delay-30 md:translate-y-1 md:scale-110 bg-purple-400 md:duration-200 text-lg font-bold text-white' : ' my-2 m-auto w-10/12 text-center block rounded-lg md:px-3 py-0 hover:shadow-lg md:transition md:ease-in-out md:delay-30 md:hover:-translate-y-1 md:hover:scale-110 md:hover:bg-gold-200 md:duration-200 text-lg font-bold text-white'} `}
        to={props.url}
      >
        {props.name}
      </NavLink>
    </>
  );
}

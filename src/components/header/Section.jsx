import { NavLink , useLocation } from "react-router-dom";


export default function Section(props) {
  const location = useLocation();
  const urlLocation = location.pathname;

  return (
    <>
      <NavLink
        className={`${urlLocation === props.url ? 'my-2 m-auto w-10/12 text-center block border-r-2 shadow-lg rounded-lg px-2 text-centershadow-lg transition ease-in-out delay-30 translate-y-1 scale-110 bg-gray-50 duration-200 text-lg font-bold text-purple-400' : ' my-2 m-auto w-10/12 text-center block rounded-lg md:px-3 py-0 hover:shadow-lg transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-gray-50 duration-200 text-lg font-bold text-purple-400'} `}
        to={props.url}
      >
        {props.name}
      </NavLink>
    </>
  );
}

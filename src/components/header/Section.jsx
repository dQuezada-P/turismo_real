import { NavLink , useLocation } from "react-router-dom";


export default function Section(props) {
  const location = useLocation();
  const urlLocation = location.pathname;

  return (
    <>
      <NavLink
        className={`my-2 m-auto w-10/12 text-center block rounded-lgtransition ease-in-out delay-30 text-lg font-bold
          ${urlLocation === props.url 
          ? 'border-r-2 shadow-lg px-2 text-centershadow-lg translate-y-1 scale-110 bg-gray-50 duration-200  text-purple-600' 
          : 'md:px-3 py-0 hover:shadow-lg hover:-translate-y-1 hover:scale-110 hover:bg-gray-50 duration-200  text-purple-500'} 
        `}
        to={props.url}
      >
        {props.name}
      </NavLink>
    </>
  );
}

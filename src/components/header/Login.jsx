import { FaRegUserCircle } from "react-icons/all";

export const Login = () => {
  return (
    <div className=" block md:flex text-center">
      {" "}
      <button className=" md:flex md:justify-center md:items-center gap-1 text-sm text-purple-400">
        <FaRegUserCircle className="  text-4xl text-purple-400" />
      </button>
    </div>
  );
};

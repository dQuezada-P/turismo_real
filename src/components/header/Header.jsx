import { Login } from "./Login";
import { Logo } from "./Logo";
import Navegator from "./Navegator";

export const Header = () => {
  return (
    <div className="md:flex md:justify-evenly block box-border md:h-20 shadow-xl rounded-b-xl  ">
      <Logo />
      <Navegator/>
      <Login/>
    </div>
  );
};

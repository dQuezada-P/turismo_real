import { Login } from "./Login";
import { Logo } from "./Logo";
import Navegator from "./Navegator";

export const Header = () => {
  return (
    <div className="md:flex md:justify-center bg-white  gap-16 block box-border md:h-20 shadow-xl sticky top-0 z-30 ">
      <Logo />
      <Navegator/>
      <Login/>
    </div>
  );
};

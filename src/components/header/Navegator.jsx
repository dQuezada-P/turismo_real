import Section from "./Section";

export default function Navegator() {
  return (
    <nav className="md:flex md:gap-10 items-center  ">
        <Section url={'/departamentos'} name={"Departamentos"} />
        <Section url={'/tours'} name={"Tours"} />
        <Section url={'/nosotros'} name={"Nosotros"} />
        <Section url={'/contactanos'} name={"Contactenos"} />
    </nav>
  );
}

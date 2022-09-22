import Section from "./Section";

export default function Navegator() {
  return (
    <nav className="md:flex md:gap-20 items-center md:mr-12 ">
      <Section url={"/departamentos"} name={"Departamentos"} />
      <Section url={"/tours"} name={"Tours"} />
      <Section url={"/nosotros"} name={"Nosotros"} />
      <Section url={"/contactanos"} name={"Contactenos"} />
    </nav>
  );
}

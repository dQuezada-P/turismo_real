export default function Disenno({children}) {
  return (
    <>
      {" "}
      <div className="h-52 w-full bg-purple-600 bg-overlap-black z-10 relative overflow-hidden">
        <div className="bg-bars-banner">
          <div className=" bg-yellow-400 bg-overlap-black"></div>
          <div className=" bg-white bg-overlap-black"></div>
        </div>
        <div className="container-body z-20 relative text-white mb-28">
          <h1 className="text-2xl font-bold mb-8">
            Servicios Tour en zonas turísticas
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, aliquid? Laboriosam maiores tenetur{" "}
            <span className="text-yellow-400">vitae quidem ipsum</span> unde
            commodi nemo alias ipsam nam, incidunt accusantium in adipisci eius,
            eligendi, perspiciatis corrupti at sequi molestiae praesentium. Ut
            totam harum placeat, velit veritatis accusantium, doloribus
            asperiores repudiandae magnam maxime impedit nemo assumenda a.
          </p>
        </div>
      </div>
      {children}
    </>
  );
}

export default function Disenno({
  children,
  title,
  desc1,
  name,
  desc2,
  desc3,
}) {
  return (
    <>
      {" "}
      <div className="h-52 w-full bg-purple-600 bg-overlap-black z-10 relative overflow-hidden">
        <div className="bg-bars-banner">
          <div className=" bg-yellow-400 bg-overlap-black"></div>
          <div className=" bg-white bg-overlap-black"></div>
        </div>
        <div className="p-8  mx-6 md:mx-40 box-content container z-20 relative text-white md:mb-28 ">
          <h1 className="text-3xl font-bold mx-8 md:mx-0 py-8 md:py-0 mb-4 capitalize ">
            {title}
          </h1>
          <p className="text-justify mb-4 invisible md:visible">
            {desc1} <span className="text-yellow-400">{name}</span> {desc2}
          </p>
          <p className="text-justify invisible md:visible">{desc3}</p>
        </div>
      </div>
      <div className="h-full w-full bg-white relative z-20 overflow-hidden">
        <div className="bg-bars-body absolute">
          <div className=" bg-yellow-400 "></div>
          <div className=" bg-purple-600"></div>
        </div>
        {children}
      </div>
    </>
  );
}

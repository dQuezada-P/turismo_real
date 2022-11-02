export default function Banner({ title, desc1, name, desc2, desc3 }) {
  return (
    <>
      {" "}
      <div
        className="Banner w-full h-40 2xl:h-52 relative z-30 bg-fondo-footer overflow-hidden"
        style={{
          backgroundImage: `url(https://turismoreal2.s3.amazonaws.com/Fondo.jpg)`,
        }}
      >
        <div className="Bars bg-bars-banner right-1/2 sm:right-[206px] 2xl:right-[317px]  ">
          <div className=" bg-yellow-400 bg-overlap-black w-16 sm:w-14 right-1/4   "></div>
          <div className=" bg-white bg-overlap-black w-16 sm:w-14 "></div>
        </div>
        <div className="Text mx-auto container z-20 relative text-white   ">
          <h1 className=" text-2xl sm:text-lg 2xl:text-3xl  font-bold mx-8 md:mx-0 py-8 md:py-0 mb-4 sm:mt-4 capitalize text-center md:text-start">
            {title}
          </h1>
          <p className="text-justify sm:text-xs 2xl:text-base mb-4 invisible md:visible">
            {desc1} <span className="text-yellow-400">{name}</span> {desc2}
          </p>
          <p className="text-justify sm:text-xs 2xl:text-base invisible md:visible ">{desc3}</p>
        </div>
      </div>
    </>
  );
}

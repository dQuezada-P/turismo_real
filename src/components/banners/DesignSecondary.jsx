export default function DesignSecondary({ children }) {
  return (
    <div className="BoxMain w-full ">
      <div className="BoxBars h-full bg-white relative z-20 overflow-hidden">
        <div className="Bars bg-bars-body ">
          <div className=" bg-yellow-400 shadow-2xl"></div>
          <div className=" bg-purple-600 shadow-2xl"></div>
        </div>
        {children}
      </div>
    </div>
  );
}

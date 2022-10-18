import { useTour } from "../context/hooks/useTour";
import { Spinner } from "../components/spinner/Spinner";
import { Filter } from "../components/department/Filter";
import Body from "../components/body/Design";
export const Tours = () => {
  const { tours, setTours } = useTour();
  const { charging, setCharging } = useTour();
  console.log(tours);
  return (
    <>
      {charging ? (
        <div className="md:h-[calc(100vh-176px)]">
          {" "}
          <Spinner />
        </div>
      ) : (
        <Body
          title={"Servicios Tour en zonas turísticas"}
          desc1={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid? Laboriosam maiores tenetur"
          }
          name={"Turismo Real"}
          desc2={
            "vitae quidem ipsum</span> unde commodi nemo alias ipsam nam, incidunt accusantium in adipisci eius, eligendi, perspiciatis corrupti at sequi molestiae praesentium. Ut totam harum placeat, velit veritatis accusantium, doloribus asperiores repudiandae magnam maxime impedit nemo assumenda a."
          }
        >
          {" "}
          <div
            className={`${
              tours.length < 5
                ? " mx-6 md:mx-40 md:h-[calc(100vh-176px)]"
                : " mx-6 md:mx-40 "
            }`}
          >
            {tours == [] ? (
              <div className="w-full h-full text-center md:flex md:items-start md:pt-20 md:justify-center relative z-30">
                <p className="text-4xl font-semibold text-purple-700">
                  No Hay Tours Disponibles
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-4 mb-12 gap-4 relative z-30 ">
                {tours.map((tour) => (
                  <div
                    className="card rounded-3xl bg-white shadow-[0px_15px_15px_rgba(0,0,0,0.5)]"
                    key={tour.ID}
                  >
                    <div className="card-image">
                      <img
                        className=""
                        src="https://ollaguatravel.com/wp-content/uploads/2015/12/Stgo1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="card-info">
                      <p className="font-bold text-2xl">$95.000</p>
                      <p className="font-semibold text-xl">Tour Isla Damas</p>
                      <p className="text-xl text-gray-500">La Serena</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Body>
      )}
    </>
  );
};

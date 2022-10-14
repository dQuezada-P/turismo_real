
export const Reserva = () => {
  return (
    <>
      
      <div className="w-full h-screen overflow-hidden">
        <div className='h-full w-full bg-white relative z-20 overflow-hidden'>
          <div className='bg-bars-body absolute'>
            <div className=' bg-yellow-400'></div>
            <div className=' bg-purple-600'></div>


            <div className="relative container-body w-[900px]">
              <div className="bg-white w-full px-20 py-10 rounded-[30px] shadow-[0px_15px_15px_rgba(0,0,0,0.5)]">
                <div className="mx-auto w-[100%]"> 
                  <p className="text-[30px] font-semibold mb-6">Por favor, complete los datos</p>
                  <form className="flex justify-center flex-col">

                      <div className="flex flex-col mb-6">
                        <label htmlFor="">Rut</label>
                        <input className="border-b border-black h-8" type="text" />
                      </div>

                      <div className="flex flex-col mb-6">
                        <label htmlFor="">Nombre </label>
                        <input className="border-b border-black h-8" type="text" />
                      </div>

                      <div className="flex flex-col mb-6">
                      <label htmlFor="">Apellido</label>
                      <input className="border-b border-black h-8" type="text" />
                      </div>

                      <div className="flex flex-col mb-6">
                        <label htmlFor="">Correo Electronico</label>
                        <input className="border-b border-black h-8" type="text" />
                      </div>

                      <div className="flex flex-col mb-6">
                        <label htmlFor="">Telefono</label>
                        <input className="border-b border-black h-8" type="text" />
                      </div>

                      <div className="flex flex-col mb-6">
                        <label className="mb-3" htmlFor="">Mensaje</label>
                        <textarea className="border border-black h-16"  />
                      </div>

                      <button className="rounded-full bg-purple-600 px-10 py-2 w-fit text-white mb-8">Proceder a pagar</button>    
                  </form>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

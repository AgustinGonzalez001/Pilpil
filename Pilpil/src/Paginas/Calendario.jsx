import Reservar from "./Reservacion.tsx";


const CalendarioReserva = () => {
  return (
    <div className="h-full w-full  gap-10 flex flex-col-reverse md:flex-row content-start flex-wrap items-center justify-evenly">

      <iframe
          className='h-110 w-100 md:w-1/2 border-4 border-amber-900 rounded-xl ml-4 md:ml-0'
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250.27251899704368!2d-71.32164336653881!3d-42.912050947977775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dac39f2f388bf%3A0x95ae6fc966783ec4!2sPilPil%20-%20Sabores%20de%20la%20Patagonia!5e0!3m2!1ses!2sar!4v1750206695349!5m2!1ses!2sar">
      
      </iframe>
      <Reservar/>      
    </div>

  );
};

export default CalendarioReserva;



import "./local.css"

import { SiGooglemaps } from "react-icons/si";
import { TbClockHour5 } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa";



const Peppone = () => {
  return (
      <div className="peppone mt-10 ml-27 mb-5">
        <div className="grid p-1 gap-1 ">
        <p className="font-mono text-4xl font-bold text-black">Don Pepone</p>
        <TbClockHour5 className="text-black"/>
        <p className="text-[#273fff]">Todos los dias de: 9:30 a. m. 10:30 p. m</p>
        <SiGooglemaps className="text-black"/>
        <p className="text-[#e1ff00]">Hermanos Paredes 152-200, U9200 Esquel, Chubut</p>
        <FaPhoneVolume className="text-black"/>
        <p className="text-[#50d71e]">0000-00-0000</p>
        </div>
      </div>
  );
}

const Carniceria = () => {
  return (
      <div className="carniceria mt-10 ml-27 mb-5">
        <div className="grid p-1 ">
        <p className="font-mono text-4xl font-bold text-black">Carniceria "Don Pepone"</p>
        <TbClockHour5 className="text-black"/>
        <p className="text-[#273fff]">Todos los dias de: 9:30 a. m. - 9:30 p. m</p>
        <SiGooglemaps className="text-black"/>
        <p className="text-[#e1ff00]">San Martín 1177, Esquel, Chubut</p>
        <FaPhoneVolume className="text-black"/>
        <p className="text-[#50d71e]">2945-45-1949</p>
        </div>
      </div>
  );
}

const Laluna = () => {
  return (
      <div className="laluna mt-10 ml-27 mb-5">
        <div className="grid p-1 gap-1 ">
        <p className="font-mono text-4xl font-bold text-black">La Luna</p>
        <TbClockHour5 className="text-black"/>
        <p className="text-[#273fff]">Todos los dias de: 12:00 p. m. - 4:00 p. m. / 8:00 p. m. - 00:00 a. m.</p>
        <SiGooglemaps className="text-black"/>
        <p className="text-[#e1ff00]">Av. Fontana 656, U9200 Esquel, Chubut</p>
        <FaPhoneVolume className="text-black"/>
        <p className="text-[#50d71e]">2945-45-3800</p>
        </div>
      </div>
  );
}

const Gocla = () => {
  return (
      <div className="gocla mt-10 ml-27 mb-5">
        <div className="grid p-1  ">
        <p className="font-mono text-4xl font-bold text-black">GoCla</p>
        <TbClockHour5 className="text-black"/>
        <p className="text-[#273fff]">De Lunes a Viernes: 9:00 a. m. - 1:30 p. m / 4:00 p. m. - 8:00 p. m. </p>
        <p className="text-[#273fff]">Sabados de: 10:00 a. m. - 1:00 p. m.</p>
        <SiGooglemaps className="text-black"/>
        <p className="text-[#e1ff00]">Av. Alvear 685, U9200 Esquel, Chubut</p>
        <FaPhoneVolume className="text-black"/>
        <p className="text-[#50d71e]">2945-45-0516</p>
        </div>
      </div>
  );
}


const Locales = () => {
  return (
    <>
      <p className="flex justify-center text-black text-5xl p-5 bg-neutral-500/75 m-5 rounded-xl">~~OTROS COMERCIOS DE GOCLA ARGENTINA S.R.L.~~</p>
      <div className="w-335 md:flex flex-wrap justify-around">
        <a href="https://www.instagram.com/donpeponeeqs/">
        <Peppone/>
        </a>
        <a href="https://www.instagram.com/carniceria.donpepone/">
        <Carniceria/>
        </a>
        <a href="https://www.instagram.com/lalunaesquel/?hl=es-la">
        <Laluna/>
        </a>
        <a href="https://www.instagram.com/goclasi/?hl=es">
        <Gocla/>  
        </a>
      </div>
    </>
  );
}




export default Locales;

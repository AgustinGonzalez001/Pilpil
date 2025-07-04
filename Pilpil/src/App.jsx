
import BotonesRedes from './assets/BotonesRedes.tsx'
import './App.css'

import { MdMenuBook } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { MdEditCalendar } from "react-icons/md";

import { Link,Routes,Route } from "react-router"
import Inicio from './Paginas/Inicio.jsx'
import Menu from './Paginas/Menu.jsx'
import CalendarioReserva from './Paginas/Calendario.jsx'

function App() {


  return (
    <>
      <nav className='w-full h-30 md:h-30 mb-1 flex bg-[#5a2517e3] // rounded-t-lg border-3 border-amber-950'>
        <Link to="/" className="md:mt-2 md:ml-5 w-80 h-150" >
          <img className='w-25 h-15 mt-10 md:mt-0 md:w-40 md:h-25 rounded-full border-2 border-solid border-[#260c05]'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdR_dURteR3v-xD5cj0u_TuJ_XkIgh4_QH7w&s" alt="" />
        </Link >
        
        <BotonesRedes />

        <ul className='gap-3 md:ml-35 md:gap-10 mt-10 md:mt-0 md:flex sm-justify-between flex items-center text-xs md:text-xl text-[#ff8400c7] '>
          <li> <Link className='grid justify-items-center' to="/"><IoRestaurant />Inicio</Link> </li>
          <li> <Link className='grid justify-items-center' to='/Menu'><MdMenuBook />Menu</Link> </li>
          <li> <Link className='grid justify-items-center text-center' to='/CalendarioDeReservas'><MdEditCalendar />Reservas</Link> </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/CalendarioDeReservas' element={<CalendarioReserva/>}/>
      </Routes>

      <div className='w-full h-30 md:h-30 bg-[#6b210be0] flex justify-end items-center md:flex md:justify-between   mt-1 gap-2 md:gap-20 rounded-b-lg border-3 border-amber-950'>
        <p className='md:text-lg text-ms text-center md:font-serif md:ml-5 md:mr-0 mr-2 ml-2'>Direccion: <a href="https://www.google.com.ar/maps/place/PilPil+-+Sabores+de+la+Patagonia/@-42.9122924,-71.3217581,18.5z/data=!4m6!3m5!1s0x961dac39f2f388bf:0x95ae6fc966783ec4!8m2!3d-42.9119874!4d-71.3214166!16s%2Fg%2F11hbnf5cm5?hl=es&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D">Sarmiento 799, Esquel, Chubut </a></p>
        <p className='md:text-lg text-ms text-center md:font-serif'>Nuemro de contacto: 02945 45-1127 </p>
        <p className='md:text-lg text-ms text-center md:font-serif md:mr-5 md:ml-0 ml-2 mr-2'>Correo elctronico: pilpil@gocla.com.ar </p>
      </div>
      
    </>
  )
}

export default App

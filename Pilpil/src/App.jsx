import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Iconos from './assets/Iconos'
import './App.css'

import { Link,Routes,Route } from "react-router"
import Inicio from './Paginas/Inicio'
import Menu from './Paginas/Menu'
import Delivery from './Paginas/Delivery'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <nav className=' w-335 h-22 mb-1 // flex justify-between items-center // bg-[#5a2517] // rounded-t-lg border-3 border-amber-950'>
        <Link to="/">
          <img className='w-35 h-20 ml-2  rounded-full border-2 border-solid border-[#260c05]'
          src="https://scontent.fcrd6-1.fna.fbcdn.net/v/t39.30808-6/277805661_351430967001234_5098143100258801312_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5Nq0DEuW6JIQ7kNvwGI17ya&_nc_oc=AdlFJqxVfSg_5crhQ7XQ4VQhK-t7B8psh3oN5h7uA72t_3ZKf9fC2YY6sF_7smZg5sM&_nc_zt=23&_nc_ht=scontent.fcrd6-1.fna&_nc_gid=ordA3bk5aUt4rfAJq02PFw&oh=00_AfJ6UZ2Qc5vrxBtCdd_757ZjuFAFZ_lHGXk16ICkEjoeIA&oe=6843F1CC" alt="" />
        </Link >
        
        <Iconos/>

        <ul className=' flex mr-30 gap-10 text-xl text-[#50d71e] '>
          <li> <Link to="/">Inicio</Link> </li>
          <li> <Link to='/Menu'>Menu</Link> </li>
          <li> <Link to='/Delivery'>Delivery</Link> </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Delivery' element={<Delivery/>}/>
      </Routes>
      <div className=' w-335 h-22  bg-[#6b210be0]  flex justify-center items-center  mt-1 gap-5 rounded-b-lg border-3 border-amber-950'>
        <p className='text-lg font-serif'>Direccion: <a href="https://www.google.com.ar/maps/place/PilPil+-+Sabores+de+la+Patagonia/@-42.9122924,-71.3217581,18.5z/data=!4m6!3m5!1s0x961dac39f2f388bf:0x95ae6fc966783ec4!8m2!3d-42.9119874!4d-71.3214166!16s%2Fg%2F11hbnf5cm5?hl=es&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D">Sarmiento 799, Esquel, Chubut </a>//</p>
        <p className='text-lg font-serif'>Nuemro de contacto: 02945 45-1127 //</p>
        <p className='text-lg font-serif'>Correo elctronico: pilpil@gocla.com.ar //</p>
        <p className='text-lg font-serif'>Redes sociales: <a href="https://www.facebook.com/pilpilesquel/">Facebock</a></p>
      </div>
      
    </>
  )
}

export default App

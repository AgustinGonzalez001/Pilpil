import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Link,Routes,Route } from "react-router"
import Inicio from './Paginas/Inicio'
import Menu from './Paginas/Menu'
import Delivery from './Paginas/Delivery'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>

      <nav className=' w-335 h-22 // flex justify-end items-center // bg-[#6c491beb] // rounded-t-lg border-2'>
        <a href="http://localhost:5173/">
          <img className='w-35 h-20 mr-200 // rounded-full border-2 border-solid outline-white'
          src="https://scontent.fcrd6-1.fna.fbcdn.net/v/t39.30808-6/277805661_351430967001234_5098143100258801312_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5Nq0DEuW6JIQ7kNvwGI17ya&_nc_oc=AdlFJqxVfSg_5crhQ7XQ4VQhK-t7B8psh3oN5h7uA72t_3ZKf9fC2YY6sF_7smZg5sM&_nc_zt=23&_nc_ht=scontent.fcrd6-1.fna&_nc_gid=ordA3bk5aUt4rfAJq02PFw&oh=00_AfJ6UZ2Qc5vrxBtCdd_757ZjuFAFZ_lHGXk16ICkEjoeIA&oe=6843F1CC" alt="" />
        </a>
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
      <div className=' w-335 h-22 bg-green-500 '>
        <p>Direccion: Sarmiento 799, Esquel, Argentina </p>
        <p>Nuemro de contacto: 02945 45-1127 </p>
        <p>Correo elctronico: pilpil@gocla.com.ar</p>
        <p>redes sociales: <a href="https://www.facebook.com/pilpilesquel/">Facebock</a></p>
      </div>
      
    </>
  )
}

export default App

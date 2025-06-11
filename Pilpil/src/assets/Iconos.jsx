import { PiInstagramLogoLight } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Iconos (){

    return(
        <div className="flex gap-15">
            <a href="https://www.facebook.com/pilpilesquel/">
            <FaSquareFacebook className='fill-blue-500' />
            </a>
            <a href="https://www.instagram.com/pilpilesquel/">
            <PiInstagramLogoLight  className="h-15 w-15 stroke-[0.5] bg-gradient-to-r from-amber-500 via-red-600 to-pink-600 "/>
            </a>
        </div>
    )
    

} 



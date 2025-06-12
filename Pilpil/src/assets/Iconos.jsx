import { PiInstagramLogoLight } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { BiSolidMap } from "react-icons/bi";

export default function Iconos (){

    return(
        <div className="flex gap-15 mr-100">
            <a href="https://www.facebook.com/pilpilesquel/">
            <FaSquareFacebook className='h-10 w-10 fill-blue-500' />
            </a>
            <a href="https://www.instagram.com/pilpilesquel/">
            <PiInstagramLogoLight  className="h-10 w-10 stroke-[0.5] // bg-gradient-to-r from-amber-500 via-red-600 to-purple-600 // rounded-md"/>
            </a>
            <a href="https://laguiaesquel.com/premium/pil-pil/">
            <BiSolidMap className="h-10 w-10 fill-lime-400" />
            </a>
        </div>
    )
    

} 



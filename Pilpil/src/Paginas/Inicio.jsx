import Pilpil from '../assets/Pilpil.png'
function Inicio(){
    return(
        <>
            <div className='w-full'>
                <img className='w-full h-70 '
                    src={Pilpil} alt="imagen PilPil" />
                
                <div className="w-50 h-35 md:w-75 md:h-30 font-mono md:text-lg text-xs top-35 md:top-40 md:left-190 absolute bg-[#ffc8007d] rounded-[2vh] grid justify-center items-center justify-items-center">
                    <p >¡Abierto todos los dias!</p>
                    <p >Horarios :</p>
                    <p >De 9:00 am a 12:00 am</p>
                </div>
            </div>
        
        </>
    )
}

export default Inicio;


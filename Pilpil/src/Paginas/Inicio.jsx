import Pilpil from '../assets/Pilpil.png'
function Inicio(){
    return(
        <>
            <div className='w-335 static'>
                <img className='md:w-335 w-full flex justify-end'
                    src={Pilpil} alt="imagen PilPil" />
                
                <div className="w-50 h-35 md:w-75 md:h-30 font-mono md:text-lg text-xs  bg-[#ffc8007d] rounded-[2vh] md:absolute md:top-50 md:right-20 top-35 rigth-5  grid justify-center items-center justify-items-center">
                    <p >¡Abierto todos los dias!</p>
                    <p >Horarios :</p>
                    <p >De 9:00 am a 12:00 am</p>
                </div>
            </div>
        
        </>
    )
}

export default Inicio;


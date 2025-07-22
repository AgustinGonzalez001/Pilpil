import Lista from "../Compoentes/lista.jsx";
import { Data } from "../Data/Data.js";
import { useState } from "react";


function Menu(){
    const [comidas, setComidas] = useState('');    
    const [stateVariable, setStateFunction] = useState(Data.Desayunos);
    const [stateMenu, setStateMenu] = useState("Desayunos");
    
    const categorias=[]
      Object.keys(Data).forEach((categoria)=>{
            categorias.push(<button className="m-4 bg-white text-black" onClick={() => click(Data[categoria],categoria, window.scrollTo({top:0, behavior: 'smooth',}))}>{categoria}</button>)   
            });

        const buscar = (comidas)=>{
            const resultados = [];
            Object.keys(Data).forEach((categoria)=>{
                Data[categoria].forEach((plato)=>{
                    if(plato.nombre.toLowerCase().includes(comidas.toLowerCase())){
                        resultados.push(plato);
                    }
                });
            });
            setStateFunction(resultados);
        
        };
        const handleSubmit = (e) =>{
            e.preventDefault();
            buscar(comidas);
             setStateMenu(comidas);
        };


    function click(data,texto){
        setStateFunction(data);
        setStateMenu(texto);
    }

    return(
        <div className="">
    
            <div className="w-100 flex md:w-35 md:-h-500 h-700 gap-4">

                <nav className='md:mt-10 md:ml-10 ml-3 mt-25 md:mt-10 w-40 h-250 md:w-60 md:h-255 mb-1 flex flex-col  items-center row-span-3  bg-[#5a2517]  rounded-t-lg border-2'>
                       {categorias}
                </nav>
                {
                <div className="h-15 w-15 md:h-150 md:w-150 ">
                    <form className="md:ml-120" onSubmit={handleSubmit}>
                        <input className=" w-46 h-15 md:mr-60 md:w-65 md:h-15 bg-orange-900 text-center border-solid border-2 border-black" 
                        type=""
                        value={comidas}
                        onChange={(e)=>setComidas(e.target.value)}
                        placeholder="Buscar comidas..."/>
                    </form>
                    <Lista titulo={stateMenu} props={stateVariable}></Lista>
                </div>}
                
            </div>
        </div>
    )
}

export default Menu;

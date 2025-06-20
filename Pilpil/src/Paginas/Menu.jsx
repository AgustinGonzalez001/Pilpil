import Lista from "../Compoentes/lista.jsx";
import { Data } from "../Data/Data.js";
import { useState } from "react";


function Menu(){
    const [comidas, setComidas] = useState('');    
    const [stateVariable, setStateFunction] = useState(Data.Desayunos);
    const [stateMenu, setStateMenu] = useState("Desayunos");
    
    const categorias=[]
      Object.keys(Data).forEach((categoria)=>{
            categorias.push(<button className="h-15 w-20 md:w-25 md:h-30 flex justify-center m-4  bg-black" onClick={() => click(Data[categoria],categoria, window.scrollTo({top:0, behavior: 'smooth',}))}><p className="ms:block grid content-center text-[15px] ms:text-[300px]">{categoria}</p></button>)   
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
        <div className="w-30 sm
        :w-100">
    
            <div className="flex md:w-335 h-full w-full gap-4">
                 
               
                <nav className='w-150 h-280 md:w-70 md:h-280 mb-1 ml-2 flex flex-col  items-center md:row-span-3  bg-[#5a2517]  rounded-t-lg border-2'>
                      
                       {categorias}

                </nav>
                {<Lista titulo={stateMenu} props={stateVariable}></Lista>}
                 <div className="md:h-15 md:flex md:flex-col md:items-end ">
                    <form onSubmit={handleSubmit}>
                        <input className="w-25 h-10 md:w-65 md:h-15 bg-orange-900 text-center border-solid border-2 border-black md:mr-5" 
                        type=""
                        value={comidas}
                        onChange={(e)=>setComidas(e.target.value)}
                        placeholder="Buscar comidas..."/>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Menu;

import Lista from "../Compoentes/lista.jsx";
import { Data } from "../Data/Data.js";
import { useState } from "react";


function Menu(){
    const [comidas, setComidas] = useState('');    
    const [stateVariable, setStateFunction] = useState(Data.Desayunos);
    const [stateMenu, setStateMenu] = useState("Desayunos");
    
    const categorias=[]
      Object.keys(Data).forEach((categoria)=>{
            categorias.push(<button className="m-5" onClick={() => click(Data[categoria],categoria, window.scrollTo({top:0, behavior: 'smooth',}))}>{categoria}</button>)   
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
    
            <div className="flex w-335 h-full gap-4">

                <nav className=' w-40 h-300 mb-1 ml-2 flex flex-col  items-center row-span-3  bg-[#5a2517]  rounded-t-lg border-2'>
                       {categorias}
                </nav>
                {<Lista titulo={stateMenu} props={stateVariable}></Lista>}
                
                <div className="h-15 flex flex-col items-end">
                    <form onSubmit={handleSubmit}>
                        <input className=" w-65 h-15 bg-orange-900 text-center border-solid border-2 border-black mr-5" 
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

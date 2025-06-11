import { useState } from "react";
import { Data } from "../Data/Data.js";
import Lista from "./lista.jsx";
import Menu from "../Paginas/Menu.jsx";

const Buscador = () => {
    const [comidas, setComidas] = useState('');
    const [resultados, setResultados] = useState([]);
    
    const datos = [Data.Cafes];

    const buscar = (comidas)=>{
        const resultados = [];
        Object.keys(Data).forEach((categoria)=>{
            Data[categoria].forEach((plato)=>{
                if(plato.nombre.toLowerCase().includes(comidas.toLowerCase())){
                    resultados.push(plato);
                }
            });
        });
        setResultados(resultados);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        buscar(comidas);
    };

    return(
        <div className="flex flex-col items-end">
            <form onSubmit={handleSubmit}>
                <input className=" w-65 h-15 bg-orange-900 text-center border-solid border-2 border-black" 
                type=""
                value={comidas}
                onChange={(e)=>setComidas(e.target.value)}
                placeholder="Buscar comidas..."/>
            </form>
            {resultados.length > 0 &&(
                <Lista props ={resultados}/>
            )}
        </div>
    );
};

export default Buscador;
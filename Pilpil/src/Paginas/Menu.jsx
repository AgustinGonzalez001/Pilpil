import Lista from "../Compoentes/lista";
import { Data } from "../Data/Data";
import { useState } from "react";

const categorias=[
    {texto:"Desayunos",
    lista:Data.Desayunos
    },
    {texto:"Pasteleria",
    lista:Data.Pasteleria
    },{texto:"Tostados",
    lista:Data.Tostados
    },{texto:"Cafes",
    lista:Data.Cafes
    },{texto:"Entradas",
    lista:Data.Entradas
    },{texto:"Platos",
    lista:Data.Platos
    },{texto:"Menu Kid",
    lista:Data.MenuKid
    },{texto:"Ensaladas",
    lista:Data.Ensaladas
    },{texto:"Postres",
    lista:Data.Postres
    },{texto:"Vinos Tintos",
    lista:Data.VinosTintos
    },{texto:"Vinos Blancos",
    lista:Data.VinosBlancos
    },{texto:"Vinos Rosados",
    lista:Data.VinosRosados
    },{texto:"Tragos",
    lista:Data.Tragos
    }

]

function Menu(){
    const [stateVariable, setStateFunction] = useState(Data.Desayunos);
    const [stateMenu, setStateMenu] = useState("Desayunos");

    function click(data,texto){
        setStateFunction(data);
        setStateMenu(texto);
    }

    return(
            <div className="flex w-335 h-full gap-4">
                <nav className=' w-40 h-300 mb-1 ml-2 flex flex-col  items-center row-span-3  bg-[#5a2517]  rounded-t-lg border-2'>
                        {categorias.map( (item) =>
                            <button className="m-5" onClick={() => click(item.lista,item.texto)}>{item.texto}</button>
                        )}
                </nav>
                <Lista titulo={stateMenu} props={stateVariable}></Lista>    
                
            </div>
    )
}

export default Menu;

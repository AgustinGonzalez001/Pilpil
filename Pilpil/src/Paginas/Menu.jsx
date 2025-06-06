import Lista from "../Compoentes/lista";
import { Data } from "../Data/Data";
import { useState } from "react";

function Menu(){
    const [stateVariable, setStateFunction] = useState(Data.Desayunos);
    const [stateMenu, setStateMenu] = useState("Desayunos");

    return(
        <div className="w-335 h-auto flex flex-col items-center ">
            <nav className=' w-335 h-22 mb-1 // flex justify-between items-center // bg-[#5a2517] // rounded-t-lg border-2'>
                     
                    <button onClick={() => {setStateFunction(Data.Desayunos), setStateMenu("Desayunos")}}>Desayunos</button>
                    <button onClick={() => {setStateFunction(Data.Pasteleria), setStateMenu("pasteleria")}}>Pasteleria</button>
                    <button onClick={() => {setStateFunction(Data.Tostados), setStateMenu("Tostados")}}>Tostados</button>
                
                  </nav>
            <h1>~~{stateMenu}~~</h1>
            <Lista props={stateVariable}></Lista>    
        </div>
    )
}

export default Menu;

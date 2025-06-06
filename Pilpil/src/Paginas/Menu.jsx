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
                    <button onClick={() => {setStateFunction(Data.Pasteleria), setStateMenu("Pasteleria")}}>Pasteleria</button>
                    <button onClick={() => {setStateFunction(Data.Tostados), setStateMenu("Tostados")}}>Tostados</button>
                    <button onClick={() => {setStateFunction(Data.Cafes), setStateMenu("Cafes")}}>Cafes</button>
                    <button onClick={() => {setStateFunction(Data.Entradas), setStateMenu("Entradas")}}>Entradas</button>
                    <button onClick={() => {setStateFunction(Data.Platos), setStateMenu("Platos")}}>Platos</button>
                    <button onClick={() => {setStateFunction(Data.MenuKid), setStateMenu("Menu Kid")}}>Menu Kid</button>
                    <button onClick={() => {setStateFunction(Data.Ensaladas), setStateMenu("Ensaladas")}}>Ensaladas</button>
                    <button onClick={() => {setStateFunction(Data.Postres), setStateMenu("Postres")}}>Postres</button>
                
                  </nav>
            <h1 className="w-150 h-18 flex justify-center bg-orange-700 rounded-lg border-3 border-amber-950">~~{stateMenu}~~</h1>
            <Lista props={stateVariable}></Lista>    
        </div>
    )
}

export default Menu;

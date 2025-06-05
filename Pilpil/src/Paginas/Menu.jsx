import Lista from "../Compoentes/lista";
import { Desayunos } from "../Data/Data";
import { Pasteleria } from "../Data/Data";
import { Tostados } from "../Data/Data";
import { Cafes } from "../Data/Data";
import { Entradas } from "../Data/Data";
import { Platos } from "../Data/Data";

function Menu(){
    
    return(
        <div className="w-335 h-auto flex flex-col items-center ">
            <h1>~~Desayunos~~</h1>
            <Lista props={Desayunos}></Lista>

            <h1>~~Pasteleria~~</h1>
            <p>~~(Preguntar por variedad de budines y alfajores)~~</p>
            <Lista props={Pasteleria}></Lista>

            <h1>~~Tostados~~</h1>
            <p>~~(Con pan tipo de campo)~~</p>
            <Lista props={Tostados}></Lista>
            <h1>~~Cafés~~</h1>
            <Lista props={Cafes}></Lista>
            <h1>~~Entradas~~</h1>
            <Lista props={Entradas}></Lista>
            <h1>~~Platos pricipales~~</h1>
            <p>~~(También puede consultar por las sugerencias del día)~~</p>
            <Lista props={Platos}></Lista>
        </div>
    )
}

export default Menu;

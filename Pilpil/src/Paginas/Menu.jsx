import Lista from "../Compoentes/lista";
import{ Data }from "../Data/Data.js";

function Menu(){
    
    return(
        <div className="w-335 h-auto flex flex-col items-center ">
            <h1>~~Desayunos~~</h1>
            <Lista props={Data.Desayunos}></Lista>
            <h1>~~Pasteleria~~</h1>
            <p>~~(Preguntar por variedad de budines y alfajores)~~</p>
            <Lista props={Data.Pasteleria}></Lista>
            <h1>~~Tostados~~</h1>
            <p>~~(Con pan tipo de campo)~~</p>
            <Lista props={Data.Tostados}></Lista>
            <h1>~~Cafés~~</h1>
            <Lista props={Data.Cafes}></Lista>
            <h1>~~Entradas~~</h1>
            <Lista props={Data.Entradas}></Lista>
            <h1>~~Platos pricipales~~</h1>
            <p>~~(También puede consultar por las sugerencias del día)~~</p>
            <Lista props={Data.Platos}></Lista>
            <h1>~~Salsas~~</h1>
            <p>Boloniesa</p>
            <p>Mixta</p>
            <p>Rosa</p>
            <p>Blanca</p>
            <p>4 queso</p>
            <p>Crema y verdeo</p>
            <p>Hongos</p>
            <p>Fileto</p>
            <h1>~~Menu Kid~~</h1>
            <Lista props={Data.MenuKid}></Lista>
            <h1>~~Ensaladas~~</h1>
            <Lista props={Data.Ensaladas}></Lista>
            <h1>~~Postres~~</h1>
            <Lista props={Data.Postres}></Lista>


        </div>
    )
}

export default Menu;

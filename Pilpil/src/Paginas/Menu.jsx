function Menu(){
    const platos =[
        //Desayunos
        {
            id:1,
            nombre:"Tradicional",
            descripcion:'(infusión, tostadas, queso crema, mermelada, y jugo exprimido)',
            precio:'9.000',
            foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbOZbG8BDVYlEqDTM0rcGfjl7UcvNzZN59Q&s'
        },
        {
            id:2,
            nombre:"Fitness",
            descripcion:'(frutas de estación, yogurt, jugo exprimido, rollito de jamón y queso)',
            precio:'11.000',
            foto:'https://i.pinimg.com/736x/ad/d1/e4/add1e48553dd5626274c566093eace5c.jpg'
        },
        {
            id:3,
            nombre:"Americano",
            descripcion:'(infusión, huevo revuelto, jugo exprimido, tostadas, panceta y ensalada de frutas)',
            precio:'12.000',
            foto:'https://i.pinimg.com/736x/d8/a4/32/d8a432ed772fb8966b331dac4a6ddcd3.jpg'
        },
        {
            id:4,
            nombre:"Americano-2",
            descripcion:'(infusión, huevo frito, salchicha alemana, tostada, panceta y jugo exprimido)',
            precio:'14.000',
            foto:'https://i.pinimg.com/736x/17/c8/8c/17c88c689971d562e1f315b14303b913.jpg'
        },
        {
            id:5,
            nombre:"Tostadas Francesas",
            descripcion:'(con infusión ó café con leche y exprimido de naranja)',
            precio:'8.500',
            foto:'https://i.pinimg.com/736x/26/97/1a/26971ac0070afaf76cedcfe2017c81e6.jpg'
        },

        //Pasteleria
        
    ];
    return(
        <div className="flex flex-col ">
            <h1>Desayunos</h1>
            <ul className=" flex flex-wrap mt-5">
                {platos.map((plato)=>(
                    <li className="flex flex-col items-center" key={plato.id}>
                        <h2>{plato.nombre}</h2>
                        <img className="w-50 h-50" src={plato.foto} alt={plato.nombre} />
                        <p>{plato.descripcion}</p>
                        <p>Precio: ${plato.precio}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu;


/*
return(
        <div className="w-335 h-auto bg-red-500 grid gap-10 ">
            <div className="grid content-start">
                    
                <div className="flex justify-center text-lg">
                <p>~ Desayunos ~//</p>
                <p>~ Pasteleria ~//</p>
                <p>~ Tostados ~//</p>
                <p>~ Cafés ~//</p>
                <p>~ Entradas ~//</p>
                <p>~ Platos Principal ~//</p>
                <p>~ Salsas ~//</p>
                <p>~ Menú Kids ~ </p>
                </div>
                    
                <div className="flex justify-center text-lg">
                <p>~ Ensaladas ~//</p>
                <p>~ Comidas de Estacon ~//</p>
                <p>~ Calzones ~//</p>
                <p>~ Postres ~//</p>
                <p>~ Bebidas ~//</p>
                <p>~ Vinos ~//</p>
                <p>~ Tragos ~</p>
                </div>

                <div className="bg-sky-500 flex items-center flex-col ">
                    <h1>~ Desayunos ~</h1>
                        
                    <div className="h-50 w-110 flex bg-red-500 ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbOZbG8BDVYlEqDTM0rcGfjl7UcvNzZN59Q&s" alt="img. Desayuno Tradicional" />
                        <p className="">Tradicional </p>
                        <p>( infusión, tostadas, queso crema, mermelada, y jugo exprimido )</p>
                    </div>

                    <div className="h-50 w-110 flex bg-red-500">
                        <img src="https://i.pinimg.com/736x/ad/d1/e4/add1e48553dd5626274c566093eace5c.jpg" alt="img. Desayuno Tradicional" />
                        <p className="">Tradicional </p>
                        <p>( infusión, tostadas, queso crema, mermelada, y jugo exprimido )</p>
                    </div>
                </div>


            </div>
        </div>
        
    )
*/
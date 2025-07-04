export default function Lista({titulo, props}){
    return(
            <div className="">
               <p className=" flex flex-wrap md:w-100 md:h-15 w-50 h-15 md:text-5xl text-2xl bg-orange-700 rounded-lg border-3 border-amber-950 ">~~{titulo}~~</p>
                <ul className=" mr-4 md:flex md:flex-wrap h-full w-full md:h-100 md:w-200  mt-5 gap-10">
                                {props.map((plato)=>(
                                    <div className=" w-50 h-110 md:w-55 md:h-110 mt-5 flex flex-col items-center justify-between gap-2 bg-orange-200 text-black rounded-lg border-solid border-2 border-yellow-900" key={plato.id}>
                                        <h2 className="text-lg text-center">{plato.nombre}</h2>
                                       
                                        <img className="w-50 h-50 border-2 border-solid border-black rounded-lg mr-3 ml-3" src={plato.foto} alt={plato.nombre} />
                                        <p className="h-25 grid items-center text-sm text-center">{plato.descripcion}</p>
                                        <p className="w-30 text-center text-2xl bg-green-500 mb-2 border-solid border-black rounded-full">${plato.precio}</p>
                                    </div>
                                ))}
                    </ul>
            </div>
    )
}
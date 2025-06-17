export default function Lista({titulo, props}){
    return(
            <div className="flex flex-col items-center justify-start w-full">
               <h1 className="w-150 h-18 text-center bg-orange-700 rounded-lg border-3 border-amber-950 ">~~{titulo}~~</h1>
                <ul className=" flex flex-wrap items-center justify-center mt-5 gap-10">
                                {props.map((plato)=>(
                                    <div className="max-w-55 h-110 flex flex-col items-center justify-between gap-2 bg-orange-200 text-black rounded-lg border-solid border-2 border-yellow-900" key={plato.id}>
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
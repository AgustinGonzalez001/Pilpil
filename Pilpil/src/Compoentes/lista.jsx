export default function Lista({titulo, props}){
    return(
            <div className="flex flex-col items-center w-full">
               <h1 className="w-150 h-18 text-center bg-orange-700 rounded-lg border-3 border-amber-950 ">~~{titulo}~~</h1>
                <ul className=" flex flex-wrap items-center justify-center mt-5 gap-10">
                                {props.map((plato)=>(
                                    <div className="max-w-65 flex flex-col items-center gap-2 bg-orange-200 text-black rounded-lg" key={plato.id}>
                                        <h2 className="text-lg ">{plato.nombre}</h2>
                                       
                                        <img className="w-50 h-50 border-2 border-solid border-black rounded-lg mr-3 ml-3" src={plato.foto} alt={plato.nombre} />
                                        <p className="h-25 p-2 grid items-center">{plato.descripcion}</p>
                                        <p className="text-2xl">${plato.precio}</p>
                                    </div>
                                ))}
                    </ul>
            </div>
         
    )
}
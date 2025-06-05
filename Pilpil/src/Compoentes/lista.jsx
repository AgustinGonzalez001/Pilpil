export default function Lista({props}){
    return(
        
          <ul className=" flex flex-wrap items-center justify-center mt-5 gap-10">
                        {props.map((plato)=>(
                            <div className="max-w-60 flex flex-col items-center gap-2 bg-white text-black rounded-lg" key={plato.id}>
                                <h2 className="text-lg ">{plato.nombre}</h2>
                                <img className="w-50 h-50 border-2 border-solid border-black rounded-lg mr-3 ml-3" src={plato.foto} alt={plato.nombre} />
                                <p className="h-20 p-2">{plato.descripcion}</p>
                                <p className="text-2xl">${plato.precio}</p>
                            </div>
                        ))}
            </ul>
    )
}
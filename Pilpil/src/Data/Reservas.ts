import { supabase } from "../../utils/supabase";
import { reserva } from "./TablaDeReservas";


async function Reserva(reserva:reserva){

    const { data, error } = await supabase
    .from('Reservas')
    .insert([
        { Nombres: reserva.nombre, Apellidos: reserva.apellido, NºDeContacto: reserva.nºDeContacto, 
        NºDePersonas: reserva.nºDePersona, Dia: reserva.dia, Horario: reserva.horario },
    ])
    
  .select()
} 

export default Reserva;
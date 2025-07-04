import {StrictMode} from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

interface Reservas{
  id:number
  Nombres:string
}

function Reservas() {
  const [instruments, setInstruments] = useState<Reservas[]>([]);
  useEffect(() => {
    getInstruments();
  }, []);
  async function getInstruments() {
    const { data } = await supabase.from("Reservas").select();
    setInstruments(data);
  }
  return (
    <StrictMode>
<ul>
      {instruments.map((instrument) => (
        <li key={instrument.id}>{instrument.id}{instrument.Nombres}</li>
      ))}
    </ul>
    </StrictMode>
    
  );
}
export default Reservas;
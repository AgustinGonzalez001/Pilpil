"use client"
import { createClient } from '@/lib/supabase/client';

export default function Instruments() {
  
  
  async function insert(){
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('instruments')
    .insert([
      { name: 'bajo' },
    ])
    
  }
          
  return <button onClick={insert}>incertar nuevo intrumento</button>
  
}


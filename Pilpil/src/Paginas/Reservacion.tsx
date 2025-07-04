import { useContext, useState } from 'react';
import styled from 'styled-components';
import DateTimePickerOpenTo from '../assets/FechaHora';

import Reserva from '../Data/Reservas.ts';
import { reserva } from '../Data/TablaDeReservas.ts';

const Reservar = (props) => {
  const [fecha, setFecha] = useState(new Date());
  
  const fechaMinima = fecha.toISOString().split("T")[0];
  
  const [horario, setHorario] = useState('');
  const [error, setError] = useState('');
  const handleHorarioChange = (event) => {
    const nuevoHorario = event.target.value;
    setHorario(nuevoHorario);
    if (horario <= "09:00" && horario >= "00:00") {
      setError('El horario de atencion al publico es de 09:00 a. m. a 23:30 p. m.');
    } else {
      setError('');
    }
  };

  const [formData, setFormData] = useState<reserva>(
    {
    nombre:"",
    apellido:"",
    nºDeContacto:"",
    nºDePersona:"", 
    dia:"", 
    horario:""
 }
  );
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
 

  return (
    <div>

    <StyledWrapper>
      <form className="form">
        <p className="title">Para reservas </p>
        <p className="message">Complete los datos nesesarios para su reserva. </p>
        <div className="flex">
          <label >
            <input required  type="text" name="nombre" className="input bg-[#5a2517e3]" value={formData.nombre} onChange={handleChange}/>
            <span>Nombre</span>
          </label>
          <label>
            <input required  type="text" name="apellido" className="input bg-[#5a2517e3]" value={formData.apellido} onChange={handleChange}/>
            <span>Apellido</span>
          </label>
        </div>  
        <label>
          <input required  type="text" name="nºDeContacto"className="input bg-[#5a2517e3]" value={formData.nºDeContacto} onChange={handleChange}/>
          <span>Numero telefonico</span>
        </label> 
        <label>
          <input required  type="text" name='nºDePersona' className="input bg-[#5a2517e3]" value={formData.nºDePersona} onChange={handleChange}/>
          <span>numero de personas</span>
        </label>
        <label>
          <input  type="date" min={fechaMinima} name='dia' className="input bg-[#5a2517e3] " value={formData.dia} onChange={handleChange}/>
        </label>

        <DateTimePickerOpenTo/>
        <p className="message">El horario de atencion al publico es de <b>09:00 a. m.</b> a <b>23:30 p. m.</b></p>
        <button className="submit" onClick={()=>Reserva(formData)} >Reservar</button>
        
      </form>
    </StyledWrapper>
    
    </div>
  );
}
const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #2b7fff;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: #2b7fff;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 10px 10px;
    outline: 0;
    border: 1px solid rgba(255, 0, 0, 0.4);
    border-radius: 10px;
    color:black
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #2b7fff }

  .submit:hover {
    background-color: rgb(4, 141, 16);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;

export default Reservar;

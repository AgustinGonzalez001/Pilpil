import { useContext, useState } from 'react';
import styled from 'styled-components';
import DateTimePickerOpenTo from '../assets/FechaHora';


const Reservar = (props) => {
  const [fecha, setFecha] = useState(new Date());
  
  const fechaMinima = fecha.toISOString().split("T")[0];
  
  const [horario, setHorario] = useState('');
  const [error, setError] = useState('');
  const handleHorarioChange = (event) => {
    const nuevoHorario = event.target.value;
    setHorario(nuevoHorario);
    if (horario <= "09:00" && horario >= "00:00") {
      setError('El horario de atencion al publico es de 9:00 a 00:00.');
    } else {
      setError('');
    }
  };

  return (
    <div>

    <StyledWrapper>
      <form className="form">
        <p className="title">Para reservas </p>
        <p className="message">Complete los datos nesesarios para su reserva. </p>
        <div className="flex">
          <label>
            <input required placeholder type="text" className="input bg-[#5a2517e3]" />
            <span>Nombre</span>
          </label>
          <label>
            <input required placeholder type="text" className="input bg-[#5a2517e3]" />
            <span>Apellido</span>
          </label>
        </div>  
        <label>
          <input required placeholder type="text" className="input bg-[#5a2517e3]" />
          <span>Numero telefonico</span>
        </label> 
        <label>
          <input required placeholder type="text" className="input bg-[#5a2517e3]" />
          <span>numero de personas</span>
        </label>
        <label>
          <input  type="date" min={fechaMinima} className="input bg-[#5a2517e3] " />
        </label>
      
        <DateTimePickerOpenTo />
        
        <button className="submit" >Reservar</button>
      </form>
    </StyledWrapper>
    </div>
  );
}
//Su reserva sera: {props.value.getDate()} / {props.value.getMonth()} / {props.value.getFullYear()}
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


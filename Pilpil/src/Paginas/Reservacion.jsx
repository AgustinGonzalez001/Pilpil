import { useContext, useState } from 'react';
import React from 'react';
import styled from 'styled-components';


export default function Calendario(props){
  return (
    <div className='flex '>
      <StyledWrapper>
        <div className='md:flex '>
        <form className="m-10 form">
          <p className="title">Para reservas </p>
          <p className="message">Complete los datos nesesarios para su reserva. </p>
          <div className="flex">
            <label>
              <input required placeholder type="text" className="input" />
              <span>Nombre</span>
            </label>
            <label>
              <input required placeholder type="text" className="input" />
              <span>Apellido</span>
            </label>
          </div>  
          <label>
            <input required placeholder type="text" className="input" />
            <span>Numero telefonico</span>
          </label> 
          <label>
            <input required placeholder type="text" className="input" />
            <span>numero de personas</span>
          </label>
          <label>
            <input  type="date" className="input" />
          </label>
          <button className="submit" >Reservar</button>
        </form>
        
        <iframe
        className='w-85 h-100 m-10 md:mt-20 md:h-100 md:w-100'
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250.27251899704368!2d-71.32164336653881!3d-42.912050947977775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dac39f2f388bf%3A0x95ae6fc966783ec4!2sPilPil%20-%20Sabores%20de%20la%20Patagonia!5e0!3m2!1ses!2sar!4v1750206695349!5m2!1ses!2sar"
         >
      </iframe>
      </div>
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
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
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

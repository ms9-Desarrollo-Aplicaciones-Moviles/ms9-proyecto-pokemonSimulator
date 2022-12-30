import { useEffect, useState } from 'react';
import './ScreenInicio.css';

const ScreenInicio = () => {

    return (
        <>
        <div id='board' className="container-inicio">
            <img className='background-image' src='./img/background-inicio.png'></img>
            <div className='logo'>
                <img src='./img/logo.png'></img>
            </div>
            <div className='button-aceptar'>
                <button className='btn-aceptar'>
                    ACEPTAR
                </button>
            </div>
            <div id='player-pikachu' className='pikachu'>
                <img className='pikachu-img' src='./img/pikachu-running.gif'></img>
                {/* https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif */}
            </div>
        </div>
        </>
    );
}

export default ScreenInicio;
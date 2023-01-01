import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScreenInicio.css';

const ScreenInicio = () => {
    const path = useNavigate();

    const regiones = [
        {
            value: 'Kanto',
            name: 'Kanto'
        },
        {
            value: 'Johto',
            name: 'Johto'
        },
        {
            value: 'Hoenn',
            name: 'Hoenn'
        },
        {
            value: 'Sinnoh',
            name: 'Sinnoh'
        },
        {
            value: 'Teselia',
            name: 'Teselia'
        },
        {
            value: 'Kalos',
            name: 'Kalos'
        },
        {
            value: 'Alola',
            name: 'Alola'
        },
        {
            value: 'Galar',
            name: 'Galar'
        },
    ];

    const [clic, setClic] = useState(0);
    function Jump() {
        const pikachu = document.getElementById('player-pikachu');
        pikachu.classList.add('pikachuJump');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const pikachu = document.getElementById('player-pikachu');
            pikachu.classList.remove('pikachuJump');
          }, 600);

          return () => clearInterval(interval);
      }, [clic]);
    
    return (
        <>
        <div className="container-inicio">
            <div className='background-image'> </div>
            <div className='logo'>
                <img src='./img/logo.png'></img>
            </div>
            <div className='dropDownRegion'>
                <h1 className='headerRegion'>Selecciona la región: </h1>
                <select className='selectRegion'>
                    {regiones.map(region => <option
                    key={region.value}
                    value={region.value}>{region.name}</option>)}
                </select>
            </div>
            <div id='player-pikachu' className='pikachu' onClick={() => {Jump(); setClic(clic + 1)}}>
                <img className='pikachu-img' src='./img/pikachu-running.gif'></img>
                {/* https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif */}
            </div>
            <div id='pokeball' className='pokeball'>
                <img className='pokeball-img' src='./img/pokeball-inicio.gif'></img>
            </div>
            {/* <div className='score'>
                Esquivadas: <span id='score'>0</span>
            </div> */}
            <div className='button-aceptar'>
                <button className='btn-aceptar' onClick={() => {path('/pokedex')}}>
                    Aceptar
                </button>
            </div>
        </div>
        </>
    );
}

export default ScreenInicio;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import './ScreenInicio.css';

const ScreenInicio = () => {
    const path = useNavigate();
    
    const regiones = [
        {
            value: 'Kanto',
            label: 'Kanto'
        },
        {
            value: 'Johto',
            label: 'Johto'
        },
        {
            value: 'Hoenn',
            label: 'Hoenn'
        },
        {
            value: 'Sinnoh',
            label: 'Sinnoh'
        },
        {
            value: 'Teselia',
            label: 'Teselia'
        },
        {
            value: 'Kalos',
            label: 'Kalos'
        },
        {
            value: 'Alola',
            label: 'Alola'
        },
        {
            value: 'Galar',
            label: 'Galar'
        },
    ];   

    let RegionN = regiones[0].value;
    const regionSelectedChange = ( {value} ) => {           
        RegionN = value;        
    }

    //Puedes usar la region en todo el proyecto
    function clickAceptar(){
        localStorage.setItem('regionNombre',RegionN);
        //console.log(localStorage.getItem('regionNombre'));      
    }

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
            {/* <div className='dropDownRegion'>
                <h1 className='headerRegion'>Selecciona la región: </h1>
                <select className='selectRegion'>
                    {regiones.map(region => <option
                    key={region.value}
                    value={region.value}>{region.name}</option>)}
                </select>
            </div> */}
            <div className='dropDownRegion'>
                <h1 className='headerRegion'>Selecciona la región: </h1>
                <Select className='selectRegion' 
                    defaultValue={ regiones[0] }
                    options={regiones}
                    onChange = {regionSelectedChange}                    
                />                                
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
                <button className='btn-aceptar' onClick={() => {path('/pokedex'),clickAceptar()}}>
                    Aceptar
                </button>
            </div>
        </div>
        </>
    );
}

export default ScreenInicio;

import DatosPokemon from './DatosPokemon';
import Carrucel from './Carrusel';
import './MenuPokedex.css';
import { GetPokemon } from '../Apis/GetDataPokemon.jsx';
import { useEffect, useState } from 'react';


const MenuPokedex = () => {
    
    const allPokemons = GetPokemon();
    
    console.log('allPokemons', allPokemons);
   
    return (
        <>
            <div className="container">
                <div className='card'>
                    <div className="card-menu">
                        <div className="menu-botones">
                            <button className='btn-pokedex' id='btn-menu'>Datos</button>
                            <button className='btn-pokedex' id='btn-buscar'>Buscar</button>
                            <button id='btn-batalla'>Batalla Pokemon</button>
                        </div>

                        <DatosPokemon />

                        <div className="lista-seleccion">
                            <p>ESCOGE 5 POKEMONES:</p>
                            <div className="lista-pokemon">
                                <div className='pokemon'>
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="" />
                                </div>
                                <div className='pokemon'>
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" alt="" />
                                </div>
                                <div className='pokemon'>
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="" />
                                </div>
                                <div className='pokemon'>
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="" />
                                </div>
                                <div className='pokemon'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-carrucel">
                        <Carrucel
                        pokemon={allPokemons}
                        />
                    </div>
                </div>
            </div>
        </>
    );

}

export default MenuPokedex;
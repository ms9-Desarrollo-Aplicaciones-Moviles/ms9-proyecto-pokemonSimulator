import DatosPokemon from './DatosPokemon';
import './MenuPokedex.css';

const MenuPokedex = () =>{
    return(
        <>
            <div className="container">
                <div className='card'>
                    <div className="card-menu">
                        <div className="menu-botones">
                            <button id='btn-menu'>Datos</button>
                            <button  id='btn-buscar'>Buscar</button>
                            <button id='btn-batalla'>PokePutazos</button>
                        </div>
                        
                        <DatosPokemon/>
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
                        <ul>
                            <li>lorem </li>
                            <li>lorem</li>
                            <li>lorem</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
} 

export default MenuPokedex;
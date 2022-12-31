import React from 'react'
import DatosPokemon from './DatosPokemon'
import Carrucel from './Carrusel'
import './MenuPokedex.css'
import { GetPokemon } from '../Apis/GetDataPokemon.jsx'
import { useEffect, useState } from 'react'
import { CheckBox } from './CheckBox'
import { useChecked } from './useChecked'




const MenuPokedex = () => {
    const allPokemons = GetPokemon();
    const checkedInitial = {
        Steel:false,
        Water:false,
        bug:false,
        dragon:false,
        Electrical:false,
        ghost:false,
        fire:false,
        Fairy:false,
        Ice:false,
        fight:false,
        Normal:false,
        plant:false,
        Psychic:false,
        rock:false,
        sinister:false,
        ground:false,
        poison:false,
        flying:false
    }
    const [ checked, handleClickCheckBox ] = useChecked(checkedInitial);
    const [pokemonSelecionado, setPokemmonSelecionado] = useState(0)
    console.log(checked, 'allPokemons', allPokemons);

    return (
        <>
            <div className="container">
                <div className='pokecard'>
                    <div className="card-menu">
                        <div className="menu-botones my-2">
                            <div className='buscador'>
                                <input className="input-buscador" 
                                        type="text"  
                                       /* placeholder="nombre"
                                        value={this.state.name}
                                        onChange={this.handleName}*//>
                                        
                                <div className='limpiador'><button className='btn-limpiar'>Limpiar</button></div>
                                <button className='btn-buscar'><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>

                        <div className="menu-buscador">

                            <div className="accordion accordion-flush menu-filtros " id="accordionFlushExample">
                                <div className="accordion-item ">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed acordion-filtro" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Filtrar tipo por:
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className='row'>
                                            <div className='col-5 mx-1'>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Acero' checked={checked.Steel} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Acero</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Agua' checked={checked. Water} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Agua</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox"  name='Bicho' checked={checked. Bug} setChecked={handleClickCheckBox} />
                                                    <label className='group-tipo-name'>Bicho</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Dragon' checked={checked.Dragon} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Dragon</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox"  name='Electrico' checked={checked.Electrical} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Eléctrico</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Fantasma' checked={checked. Ghost} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Fantasma</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Fuego' checked={checked.Fire} setChecked={handleClickCheckBox} />
                                                    <label className='group-tipo-name'>Fuego</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox"  name='Hada' checked={checked.Fairy} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Hada</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Hielo' checked={checked.Ice} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Hielo</label>
                                                </div>
                                            </div>
                                            <div className='col-5 mx-1'>                                             
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Lucha' checked={checked. Fight} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Lucha</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Normal' checked={checked.Normal} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Normal</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Planta' checked={checked.Plant} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Planta</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Psiquico'  checked={checked.Psychic}  setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Psíquico</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Roca' checked={checked.Rock} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Roca</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox"  name='Siniestro' checked={checked.Sinister} setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Siniestro</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Tierra'checked={checked.Ground}  setChecked={handleClickCheckBox}/>
                                                    <label className='group-tipo-name'>Tierra</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Veneno' checked={checked.Poison} setChecked={handleClickCheckBox} />
                                                    <label className='group-tipo-name'>Veneno</label>
                                                </div>
                                                <div className='group-tipo'>
                                                    <input className='filter-check' type="checkbox" name='Volador' checked={checked.Fying}   setChecked={handleClickCheckBox} />
                                                    <label className='group-tipo-name'>Volador</label>
                                                </div>
                                            </div>
                                            <div className='acordion-footer'>
                                                <button className='btn btn-secondary btn-filtrar'>Filtrar</button>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>

                        {/* <DatosPokemon pokemon={allPokemons} elElegido={pokemonSelecionado} /> */}


                    </div>

                    <div className="card-carrucel">
                        <Carrucel
                            cambiarPokemon={setPokemmonSelecionado}
                            pokemon={allPokemons}
                        />
                    </div>
                </div>

            </div>

            
        </>
    );

}

export default MenuPokedex

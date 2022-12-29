import './BuscarPokemon.css'

const BuscarPokemon = () => {
    return (
        <>
            <div className="menu-buscador">
                <div className='dato-buscar'>
                    <label >NOMBRE:</label>
                    <input id='Nombre' type="text"></input>
                </div>
                <div className='dato-buscar'>
                    <label>COLOR:</label>
                    <input id='Color' type="text"></input>
                </div>
                <div className='dato-buscar'>
                    <label htmlFor="">TIPO:</label>
                    <input id='Tipo' type="text"></input>
                </div>
                <div className='dato-buscar'>
                    <label htmlFor="">ORDEN:</label>
                    <input id='Orden' type="text"></input>
                </div>
                <div className='botones-izquierdo'>
                <button id='btn-rechazar'>X</button>
                <button id='btn-aceptar'>ACEPTAR</button>
                </div>
            </div>
        </>
    );
}

export default BuscarPokemon;
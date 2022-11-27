import './DatosPokemon.css'

const DatosPokemon = () => {
    return (
        <>
            <div className="menu-datos">
                <div className='datos-derecho'>
                    <div className='foto-pokemon'>
                        <img className='sprite-pokemon' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="#" />
                    </div>
                    <div className='espeficacion-derecho'>
                        <div className='dato-detalle'>
                            <label htmlFor="">ATAQUE:</label>
                            <p>40</p>
                        </div>
                        <div className='dato-detalle'>
                            <label htmlFor="">ATAQUE ESPECIAL:</label>
                            <p>90</p>
                        </div>
                    </div>
                </div>
                <div className='datos-izquierdo'>
                    <div className='dato-detalle'>
                        <label htmlFor="">NOMBRE:</label>
                        <p>Blastoid</p>
                    </div>
                    <div className='dato-detalle'>
                        <label htmlFor="">TIPO:</label>
                        <p>Agua</p>
                    </div>
                    <div className='dato-detalle'>
                        <label htmlFor="">RESISTENCIA:</label>
                        <p>30</p>
                    </div>
                    <div className='dato-detalle'>
                        <label htmlFor="">VELOCIDAD:</label>
                        <p>25</p>
                    </div>
                    <div className='dato-detalle'>
                        <label htmlFor="">DEFENSA:</label>
                        <p>15</p>
                    </div>
                    <div className='dato-detalle'>
                        <label htmlFor="">DEFENSA ESPECIAL:</label>
                        <p>60</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DatosPokemon;
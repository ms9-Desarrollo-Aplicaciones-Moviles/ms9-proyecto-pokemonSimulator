
import { useEffect } from 'react';
import { useState } from 'react';
import './Carrusel.css';

const Carrucel = ({pokemon}) =>{
    console.log('pokemon', pokemon);
    return(
        <>
            <div className='btn-carrusel' >
                <img src="/img/flechaArriba.png" alt=""/>
            </div>
            <div className="container-carrusel">
                <div className="carrusel">
                {/*--------- Elemento(foto y nombre) indiviual del carrucel--------*/}
                    <div className="elemento">
                        <div className='imagen-pokemon'>
                            
                        </div>    
                        <div className='elemento-left'>
                            <div className="elemento-dato">
                                <h4>{pokemon[0].name}</h4>
                                <p>NV. 20</p>
                            </div>
                            <div className="elemento-grafico">
                                <img className="barra-vida" src="/img/barraDeVida.png" alt="" />
                                <p>95/95</p>
                            </div>
                        </div>
                    </div>

                    <div className="elemento">
                        <div className='imagen-pokemon'>
                            <img src="/img/pokeball.png" alt="" />
                        </div>    
                        <div className='elemento-left'>
                            <div className="elemento-dato">
                                <h4>BLASTOID</h4>
                                <p>NV. 20</p>
                            </div>
                            <div className="elemento-grafico">
                                <img className="barra-vida" src="/img/barraDeVida.png" alt="" />
                                <p>95/95</p>
                            </div>
                        </div>
                    </div>

                    <div className="elemento">
                        <div className='imagen-pokemon'>
                
                        </div>    
                        <div className='elemento-left'>
                            <div className="elemento-dato">
                                <h4>BLASTOID</h4>
                                <p>NV. 20</p>
                            </div>
                            <div className="elemento-grafico">
                                <img className="barra-vida" src="/img/barraDeVida.png" alt="" />
                                <p>95/95</p>
                            </div>
                        </div>
                    </div>

                    <div className="elemento">
                        <div className='imagen-pokemon'>
                
                        </div>    
                        <div className='elemento-left'>
                            <div className="elemento-dato">
                                <h4>BLASTOID</h4>
                                <p>NV. 20</p>
                            </div>
                            <div className="elemento-grafico">
                                <img className="barra-vida" src="/img/barraDeVida.png" alt="" />
                                <p>95/95</p>
                            </div>
                        </div>
                    </div>

                    <div className="elemento">
                        <div className='imagen-pokemon'>
                
                        </div>    
                        <div className='elemento-left'>
                            <div className="elemento-dato">
                                <h4>BLASTOID</h4>
                                <p>NV. 20</p>
                            </div>
                            <div className="elemento-grafico">
                                <img className="barra-vida" src="/img/barraDeVida.png" alt="" />
                                <p>95/95</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className='btn-carrusel'>
                <img src="/img/flechaAbajo.png" alt="" />
            </div>
        </>
    );
}

export default Carrucel;
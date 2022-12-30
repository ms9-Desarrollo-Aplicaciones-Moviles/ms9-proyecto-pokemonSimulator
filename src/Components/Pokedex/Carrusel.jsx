import { useEffect } from 'react'
import { useState } from 'react'
import './Carrusel.css'

const Carrucel = (props) => {
	const [indice, setIndice] = useState(0)

	return (
		<>
			<div
				onClick={() => (indice != 0 ? setIndice(indice - 1) : setIndice(0))}
				className="btn-carrusel"
			>
				<img src="/img/flechaArriba.png" alt="" />
			</div>
			<div className="container-carrusel">
				<div className="carrusel">
					{props.pokemon.map((x, i) => {
						if (indice <= i && i <= indice + 6) {
							return (
								<div onClick={() => console.log(x.name)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="elemento">
									{/* <button onClick={() => props.cambiarPokemon(i)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button> */}
									 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog">
											<div class="modal-content p-3 mb-2 bg-info text-dark">
												<div class="modal-header">
													<h5 class="modal-title" id="exampleModalLabel">#</h5>
													<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

												</div>
												<div class="modal-body">
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
																<p>Blastoise</p>
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
												</div>
												<div class="modal-footer">
													<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
													 <button type="button" class="btn btn-primary">Save changes</button> 
												 </div>
											</div>
										</div>
									</div> 
									<div className="imagen-pokemon">
										<img src={x.sprites.front_default}></img>
									</div>
									<div className="elemento-left">
										<div className="elemento-dato">
											<h4>{x.name}</h4>
											<p>{x.base_experience}</p>
										</div>
										<div className="elemento-grafico">
											<img className="barra-vida" src="/img/barraDeVida.png" alt="" />
											<p>
												{x.stats[0].base_stat}/{x.stats[0].base_stat}
											</p>
										</div>
									</div>
								</div>
							)
						}
					})}
				</div>
			</div>
			<div
				onClick={() => (indice == 144 ? setIndice(144) : setIndice(indice + 1))}
				className="btn-carrusel"
			>
				<img src="/img/flechaAbajo.png" alt="" />
			</div>
		</>
	)
}

export default Carrucel

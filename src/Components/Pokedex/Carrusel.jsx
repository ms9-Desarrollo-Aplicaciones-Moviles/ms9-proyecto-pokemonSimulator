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
					{indice}
					{props.pokemon.map((x, i) => {
						if (indice <= i && i <= indice + 5) {
							return (
								<div onClick={() => props.cambiarPokemon(i)} className="elemento">
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

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Carrusel.css'

const Carrucel = (props) => {
	const [indice, setIndice] = useState(0)
	const path = useNavigate()

	//create a new array by filtering the original array
	const filteredData = props.pokemon.filter((pokemon) => {
		//if no input then return the original
		if (props.inputPokemon === '') {
			return pokemon
		}
		//return the item which contains the user input
		else {
			return pokemon.name.toLowerCase().includes(props.inputPokemon)
		}
	})

	useEffect(() => {
		setIndice(indice + 1)
		setIndice(0)
	}, [props.inputPokemon])

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
					{filteredData.map((x, i) => {
						if (indice <= i && i <= indice + 6) {
							return (
								<div
									onClick={() => path('/pokemon', { state: x })}
									className="elemento"
									key={x.id}
								>
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

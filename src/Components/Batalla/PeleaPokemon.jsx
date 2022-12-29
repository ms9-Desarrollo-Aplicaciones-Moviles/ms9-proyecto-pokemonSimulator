import React from 'react'
import './PeleaPokemon.css'

const PeleaPokemon = () => {
	return (
		<>
			{/* Área de batalla */}
			<div className="principal">
				<div className="pokemonUsuario">
					<div className="barraEstado">
						<div className="superior">
							<div className="nombre">Charmander</div>
							<div className="nivel"></div>
						</div>
						<div className="inferior">
							<div className="tipoPokemon"></div>
							<div className="barraSalud" id="barraSalud">
								<p>PS</p>
								<div className="saludContainer">
									<div className="salud"></div>
								</div>
							</div>
						</div>
					</div>
					<img
						src="{/* Insertar img del pokemon */}"
						alt="pokemonImg.jpg"
						className="pokemon"
					/>
				</div>

				<div className="pokemonPC">
					<div className="barraEstado">
						<div className="superior">
							<p className="nombre">Squirtle</p>
							<p className="nivel"></p>
						</div>
						<div className="inferior">
							<div className="tipoPokemon"></div>
							<div className="barraSalud" id="barraSalud">
								<p>PS</p>
								<div className="saludContainer">
									<div className="salud"></div>
								</div>
							</div>
						</div>
					</div>
					<img
						src="{/* Insertar img del pokemon */}"
						alt="pokemonImg.jpg"
						className="pokemon"
					/>
				</div>
			</div>
			{/* Barra del menú */}
			<div className="barraMenu">
				<div className="texto">
					<p>QUÉ DEBERÍA HACER [prop nombre pokemon]?</p>
				</div>
				<div className="botones">
					<button className="boton btnLuchar">LUCHAR</button>
					<button className="boton btnCambiarPokemon">POKÉMON</button>
				</div>
			</div>
		</>
	)
}

export default PeleaPokemon

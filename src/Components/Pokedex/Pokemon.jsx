import { useNavigate, useLocation } from 'react-router-dom'
import './Pokemon.css'

const Pokemon = () => {
	const path = useNavigate()
	const location = useLocation()
	let pokemon = location.state

	function renderSwitchTiposPokemon(param) {
		switch (param.type.name) {
			case 'normal':
				return (
					<div className="badge bg-normal p-1 rounded rounded-3" key={1 * Math.random()}>
						normal
					</div>
				)
			case 'fighting':
				return (
					<div
						className="badge bg-fighting p-1 rounded rounded-3"
						key={1 * Math.random()}
					>
						lucha
					</div>
				)
			case 'flying':
				return (
					<div className="badge bg-flying p-1 rounded rounded-3" key={1 * Math.random()}>
						volador
					</div>
				)
			case 'poison':
				return (
					<div className="badge bg-poison p-1 rounded rounded-3" key={1 * Math.random()}>
						veneno
					</div>
				)
			case 'ground':
				return (
					<div className="badge bg-ground p-1 rounded rounded-3" key={1 * Math.random()}>
						tierra
					</div>
				)
			case 'rock':
				return (
					<div className="badge bg-rock p-1 rounded rounded-3" key={1 * Math.random()}>
						roca
					</div>
				)
			case 'bug':
				return (
					<div className="badge bg-bug p-1 rounded rounded-3" key={1 * Math.random()}>
						bicho
					</div>
				)
			case 'ghost':
				return (
					<div className="badge bg-ghost p-1 rounded rounded-3" key={1 * Math.random()}>
						fantasmal
					</div>
				)
			case 'steel':
				return (
					<div className="badge bg-steel p-1 rounded rounded-3" key={1 * Math.random()}>
						acero
					</div>
				)
			case 'fire':
				return (
					<div className="badge bg-fire p-1 rounded rounded-3" key={1 * Math.random()}>
						fuego
					</div>
				)
			case 'water':
				return (
					<div className="badge bg-water p-1 rounded rounded-3" key={1 * Math.random()}>
						agua
					</div>
				)
			case 'grass':
				return (
					<div className="badge bg-grass p-1 rounded rounded-3" key={1 * Math.random()}>
						planta
					</div>
				)
			case 'electric':
				return (
					<div
						className="badge bg-electric p-1 rounded rounded-3"
						key={1 * Math.random()}
					>
						eléctrico
					</div>
				)
			case 'psychic':
				return (
					<div className="badge bg-psychic p-1 rounded rounded-3" key={1 * Math.random()}>
						psíquico
					</div>
				)
			case 'ice':
				return (
					<div className="badge bg-ice p-1 rounded rounded-3" key={1 * Math.random()}>
						hielo
					</div>
				)
			case 'dragon':
				return (
					<div className="badge bg-dragon p-1 rounded rounded-3" key={1 * Math.random()}>
						dragón
					</div>
				)
			case 'dark':
				return (
					<div className="badge bg-dark p-1 rounded rounded-3" key={1 * Math.random()}>
						siniestro
					</div>
				)
			case 'fairy':
				return (
					<div className="badge bg-fairy p-1 rounded rounded-3" key={1 * Math.random()}>
						hada
					</div>
				)
			case 'unknown':
				return (
					<div className="badge bg-unknown p-1 rounded rounded-3" key={1 * Math.random()}>
						desconocido
					</div>
				)
			case 'shadow':
				return (
					<div className="badge bg-shadow p-1 rounded rounded-3" key={1 * Math.random()}>
						sombra
					</div>
				)
		}
	}
	function renderSwitchStatsPokemon(param) {
		switch (param.stat.name) {
			case 'hp':
				return (
					<div className="stat" key={1 * Math.random()}>
						HP: {param.base_stat}
					</div>
				)
			case 'attack':
				return (
					<div className="stat" key={1 * Math.random()}>
						Ataque: {param.base_stat}
					</div>
				)
			case 'defense':
				return (
					<div className="stat" key={1 * Math.random()}>
						Defensa: {param.base_stat}
					</div>
				)
			case 'special-attack':
				return (
					<div className="stat" key={1 * Math.random()}>
						ATK Especial: {param.base_stat}
					</div>
				)
			case 'special-defense':
				return (
					<div className="stat" key={1 * Math.random()}>
						DEF Especial: {param.base_stat}
					</div>
				)
			case 'speed':
				return (
					<div className="stat" key={1 * Math.random()}>
						Velocidad: {param.base_stat}
					</div>
				)
		}
	}

	return (
		<>
			<div className="contenedorPokemon m-0 w-100">
				<div className="btnAtras">
					<a
						type="button"
						onClick={() => path('/pokedex')}
						className="btn btn-lg bg-primary text-light border border-dark btn-Volver"
					>
						Volver
					</a>
				</div>
				<div className="contenedorSuperior">
					<div className="datosPokemon">
						<div className="datosPokemonSuperior">
							<div className="numeroPokemon"></div>
							<div className="nombrePokemon"></div>
						</div>
						<div className="datosPokemonInferior">
							<div className="tiposPokemon">
								{pokemon.types.map((tipoPokemon) => {
									return renderSwitchTiposPokemon(tipoPokemon)
								})}
							</div>
							<div className="datos">
								<div className="altura">{pokemon.height / 10} Kg</div>
								<div className="peso">{pokemon.weight / 10} m</div>
							</div>
						</div>
					</div>
					<div className="imgPokemon m-0">
						<img src={pokemon.sprites.front_default} width={'300px'}></img>
					</div>
				</div>
				<div className="contenedorInferior">
					<div className="statsPokemon">
						<div className="contendorIzq">Estadísticas</div>
						<div className="contenedorDer">
							{pokemon.stats.map((stat) => {
								return renderSwitchStatsPokemon(stat)
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Pokemon

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
		<div className='header-main-pokemon'>
						<span className='number-pokemon'>#{pokemon.id}</span>
						<div className='container-img-pokemon'>
							<img
								src={pokemon.sprites.other.dream_world.front_default}
								alt={`Pokemon ${pokemon.name}`}
							/>
						</div>

						<div className='container-info-pokemon'>
							<h1>{pokemon.name}</h1>
							<div className='card-types info-pokemon-type'>
							{pokemon.types.map((tipoPokemon) => {
									return renderSwitchTiposPokemon(tipoPokemon)
								})}
							</div>
							<div className='info-pokemon'>
								<div className='group-info'>
									<p>Altura</p>
									<span>{pokemon.height}</span>
								</div>
								<div className='group-info'>
									<p>Peso</p>
									<span>{pokemon.weight}KG</span>
								</div>
							</div>
						</div>
					</div>



					<div className='container-stats'>
						<h1>Estadísticas</h1>
						<div className='stats'>
							<div className='stat-group'>
								<span>Hp</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[0].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Ataque</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[1].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Defensa</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[2].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Ataque Especial</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[3].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Defensa Especial</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[4].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Velocidad</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[5].base_stat}
								</span>
							</div>
						</div>
					</div>


					<div class="pokebola">
		<div class="pokebola-botao" type="button"
						onClick={() => path('/pokedex')}></div></div>

		</>
	)
}

export default Pokemon

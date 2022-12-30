import { useEffect } from 'react'

export const GetPokemon = () => {
	const arrPoke = []

	const peticion = async () => {
		//Peticion de los 150 pokemones
		const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150/')
		const { results } = await respuesta.json()

		results.map(async (pokemon) => {
			const respuestaPokemon = await fetch(pokemon.url)
			const { abilities, base_experience, id, name, sprites, stats, types } =
				await respuestaPokemon.json()

			await arrPoke.push({
				id: id,
				name: name,
				sprites: sprites,
				stats: stats,
				types: types,
				abilities: abilities,
				base_experience: base_experience,
			})

			arrPoke.sort((a, b) => a.id - b.id)
		})
	}

	peticion()

	console.log('arrpoke', arrPoke)
	return arrPoke
}

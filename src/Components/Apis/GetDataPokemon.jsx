import { useEffect } from "react"

export const GetPokemon = () =>{
    const arrPoke = [];

    useEffect(() => { 
        const peticion = async () => {     
            //Peticion de los 150 pokemones
            const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150/');
            const { results } = await respuesta.json();
        
            results.map(async (pokemon) => {
                //Peticion por pokemon 
                const resp = await fetch(pokemon.url)
                const { abilities, base_experience, id, name, moves, sprites, stats, types } = await resp.json();
        
                //Extrae los datos del movimientos 
                const movimientos = moves.map((movimiento) => {
                    const { move } = movimiento;
                    return move;
                });
        
                arrPoke.push({
                    id: id,
                    name: name,
                    sprites: sprites,
                    stats: stats,
                    types: types,
                    abilities: abilities,
                    moves: movimientos,
                    base_experience: base_experience,
                });
            });

        }

        peticion();
    }, [])

    
    console.log('arrpoke', arrPoke);
    return arrPoke;
}






    


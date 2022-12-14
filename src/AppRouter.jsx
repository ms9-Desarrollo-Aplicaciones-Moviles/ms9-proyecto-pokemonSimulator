import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ScreenInicio from './Components/Inicio/ScreenInicio'
import MenuPokedex from './Components/Pokedex/MenuPokedex'
import Pokemon from './Components/Pokedex/Pokemon'
import { Navigation } from './Navigation'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<ScreenInicio />}></Route>
				<Route path="pokedex" element={<MenuPokedex />}></Route>
				<Route path="pokemon" element={<Pokemon />}></Route>
			</Route>

			<Route path="*" element={<Navigate to="/" />}></Route>
		</Routes>
	)
}

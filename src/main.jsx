import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScreenInicio from './Components/Inicio/ScreenInicio'
import MenuPokedex from './Components/Pokedex/MenuPokedex'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>
)

import React from 'react'
import Pokecard from './Pokecard.js'
import './Pokedex.css';

/**Composes a collection of Pokemon
 *
 * Rendered by Pokegame
 */
function Pokedex(props) {
  return (
    <div className='Pokedex'>
      <h1>{props.isWinner ? 'This hand wins!' : ''}</h1>
      {props.pokedata.map(pokemon => <Pokecard pokemonDataObj={pokemon} />)}
      <h3>{props.pokeExp}</h3>
    </div>
  )
}

export default Pokedex
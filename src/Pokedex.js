import React from 'react'
import Pokecard from './Pokecard.js'

function Pokedex(props){
  return props.pokedata.map(pokemon => <Pokecard pokemonDataObj={pokemon}/>)
}

export default Pokedex
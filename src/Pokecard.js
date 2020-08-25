import React from 'react'
import './Pokecard.css'

const POKE_API_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

/** Constructs a Pokemon Card with:
 * -name
 * -type
 * -experience
 * 
 * Rendered by Pokedex
 */
function Pokecard(props){ //destructuring props
  const { id, name, type, baseExperience } = props.pokemonDataObj
  
  return (
  <div className="Pokecard">
    <h3> Name: {name} </h3>
    <img src={`${POKE_API_URL}${id}.png`} alt="pokemon"/> 
    <h3> Type: {type} </h3>
    <h3> EXP: {baseExperience} </h3>
  </div>
  )
}

export default Pokecard
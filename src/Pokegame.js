'use strict';
import React from 'react';
import { shuffle } from './helpers.js';
import Pokedex from './Pokedex';

/**Randomly assigns list of 8 Pokemon into 2 hands of 4 Pokemon each
 * Rendered by App */
function Pokegame(props) {
  const pokeCollection = props.pokedata;
  const shuffledPokeCollection = shuffle(pokeCollection);
  const half = (pokeCollection.length / 2)
  const handOne = shuffledPokeCollection.slice(0, half);
  const handTwo = shuffledPokeCollection.slice(half);

  const handOneExp = handOne.reduce(((accumulator, currVal) => 
    accumulator + currVal.baseExperience), 0);
  
  const handTwoExp = handTwo.reduce(((accumulator, currVal) => 
  accumulator + currVal.baseExperience), 0);

  console.log('handOneExp', handOneExp);
  return (
    <div>
    <Pokedex pokedata={handOne} pokeExp = {handOneExp} isWinner = { handOneExp > handTwoExp} />
    <hr />

    <Pokedex pokedata={handTwo} pokeExp = {handTwoExp} isWinner = { handOneExp < handTwoExp} />
    </div>
  )
}

export default Pokegame;
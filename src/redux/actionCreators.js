import axios from 'axios'
import { GET_POKEMON } from './actions'

export function getPokemon(url) {
  console.log('GET_POKEMON')
  return { type: GET_POKEMON, payload: url }
}

export function getPokemonAsync(num) {
  return (dispatch) => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(response => {
      dispatch(getPokemon(response.data.sprites.front_shiny))
    })
    .catch(error => {
      console.error('axios error', error); // eslint-disable-line no-console
    });
  }
}
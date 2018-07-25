import { GET_POKEMON } from './actions'

export function getPokemon() {
  return { type: GET_POKEMON, payload: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png' }
}

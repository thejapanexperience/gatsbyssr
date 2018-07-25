import { GET_POKEMON } from './actions'

const DEFAULT_STATE = {
  pokeUrl: ''
}

const getPokemon = (state, action) => Object.assign({}, state, { pokeUrl: action.payload.data.sprites.front_shiny })

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return getPokemon(state, action)
    default:
      return state
  }
}

export default rootReducer

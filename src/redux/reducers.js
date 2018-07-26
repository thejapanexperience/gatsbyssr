import { combineReducers } from 'redux'
import { GET_POKEMON } from './actions'

const pokeUrl = (state = '', action) => {
  if (action.type === GET_POKEMON) {
    return action.payload
  }
  return state
}

const rootReducer = combineReducers({ pokeUrl })

export default rootReducer

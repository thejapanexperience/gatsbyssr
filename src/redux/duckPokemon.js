// Imports
import axios from 'axios'
import { all, takeEvery, call, put } from 'redux-saga/effects'

// Actions
export const GET_POKEMON = 'GET_POKEMON'
export const UPDATE_POKEMON = 'UPDATE_POKEMON'
export const NAME_POKEMON = 'NAME_POKEMON'

// Reducers
export const pokeUrl = ( state = '', action ) => {
  if (action.type === UPDATE_POKEMON) {
    return action.payload
  }
  return state
}
export const pokeName = ( state = '', action ) => {
  if (action.type === NAME_POKEMON) {
    return action.payload
  }
  return state
}

// Action Creators
export function getPokemon(num) {
  return { type: GET_POKEMON, payload: num }
}

export function showPokemon(url) {
  return { type: UPDATE_POKEMON, payload: url }
}

export function namePokemon(name) {
  return { type: NAME_POKEMON, payload: name }
}

// Sagas
// rootSaga
export function* pokemonSaga(){
  yield all([getPokemonSaga()]) // yield is like 'await'
}

// Get Pokemon Saga
export function* getPokemonSaga(){
  yield takeEvery(GET_POKEMON, getPokemonRequest) // takeEvery will hijack actions
}

export function* getPokemonRequest(action){
  yield put(namePokemon(''))
  const num = action.payload
  const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon/${num}`) // call can handle promises
  const url = response.data.sprites.front_shiny
  const name = response.data.name
  yield all([put(showPokemon(url)), put(namePokemon(name))]) // put will invoke a function
}
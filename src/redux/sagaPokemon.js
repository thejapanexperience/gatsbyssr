// This saga is not being used here. It also exists inside duckPokemon.js
// This is an example of a standalone saga.

import axios from 'axios'
import { all, takeEvery, call, put } from 'redux-saga/effects'
import { GET_POKEMON, showPokemon } from '../duckPokemon';

export default function* rootSaga(){
  yield all([getPokemon()])
}

export function* getPokemon(){
  yield takeEvery(GET_POKEMON, makeApiRequest)
}

export function* makeApiRequest(action){
  const num = action.payload
  const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon/${num}`)
  const pokeUrl = response.data.sprites.front_shiny
  yield put(showPokemon(pokeUrl))
}
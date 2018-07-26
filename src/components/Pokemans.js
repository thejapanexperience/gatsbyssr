import React, { Component } from 'react'
import axios from 'axios'

import { Button } from './'

export default class Pokemans extends Component {

  state = {
    pokeUrl: ''
  }

  componentDidMount() {
    this.getPokemon(1)
  }

  render() {
    return (
      <>
        <h1>Choose a random pokemon</h1>
        {
          this.state.pokeUrl
          ? <img alt='pokemon' src={this.state.pokeUrl} />
          : null
        }
        <Button onClick={this.handleClick}>Get Pokémon</Button>
      </>
    )
  }

  handleClick = () => {

    const num = Math.floor(Math.random() * Math.floor(300))

    this.getPokemon(num)

  }

  getPokemon = (num) => {

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then(data => {

        this.setState({ pokeUrl: data.data.sprites.front_shiny })

      })
  }

}

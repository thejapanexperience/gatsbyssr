import React, { Component } from 'react'
import axios from 'axios'

import { Layout, Button } from '../components'

export default class Page2 extends Component {

  state = {
    pokeUrl: ''
  }

  componentDidMount() {
    this.getPokemon(1)
  }

  render() {
    return (
      <Layout>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        {
          this.state.pokeUrl
          ? <img alt='pokemon' src={this.state.pokeUrl} />
          : null
        }
        <Button onClick={this.handleClick}>Get Pokémon</Button>
      </Layout>
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

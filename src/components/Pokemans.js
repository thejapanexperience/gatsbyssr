import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPokemonAsync } from '../redux/actionCreators'
import { Button } from './'

class Pokemans extends Component {

  componentDidMount() {
    this.props.getPokemon(1)
  }

  render() {
    console.log(this.props)
    return (
      <>
        <h1>Choose a random pokemon</h1>
        {
          this.props.pokeUrl
          ? <img alt='pokemon' src={this.props.pokeUrl} />
          : null
        }
        <Button onClick={this.handleClick}>Get Pokémon</Button>
      </>
    )
  }

  handleClick = () => {
    console.log('handleClick')
    const num = Math.floor(Math.random() * Math.floor(300))
    this.props.getPokemon(num)
  }
}

//Redux
// Get data from store
const mapStateToProps = state => ({ 
  pokeUrl: state.pokeUrl 
})
// Get actions from actionCreators
const mapDispatchToProps = dispatch => ({
  getPokemon(num) {
    dispatch(getPokemonAsync(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokemans)

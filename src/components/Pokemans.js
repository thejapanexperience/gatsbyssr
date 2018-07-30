// imports
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actionCreators
import { getPokemon } from '../redux/duckPokemon'

// Components
import { Button } from '.'

class Pokemans extends Component {

  componentDidMount() {
    this.getRandomPokemon()
  }

  randomNumberGenerator = () => {
    return Math.floor(Math.random() * Math.floor(300))
  }

  getRandomPokemon = () => {
    this.props.getPokemon(this.randomNumberGenerator())
  }

  render() {
    return (
      <>
        <h1>Choose a random pokemon</h1>
        {
          this.props.pokeName
          ? <h2>You've got {this.props.pokeName}!</h2>
          : <h2>What will you get ???</h2>
        }
        {
          this.props.pokeUrl
          ? <img alt='pokemon' src={this.props.pokeUrl} />
          : null
        }
        <Button onClick={this.getRandomPokemon}>Get Pokémon</Button>
      </>
    )
  }
}

// Redux
// Get data from store and add to props
const mapStateToProps = store => ({ 
  pokeUrl: store.pokeUrl ,
  pokeName: store.pokeName
})
// Pass actionCreators into props
const mapDispatchToProps = dispatch => bindActionCreators(
  { getPokemon }, dispatch
)


export default connect(mapStateToProps, mapDispatchToProps)(Pokemans)

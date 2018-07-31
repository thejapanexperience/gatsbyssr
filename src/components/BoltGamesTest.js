// imports
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actionCreators
import { getGames } from '../redux/duckGames'

// Components


class BoltGamesTest extends Component {

  componentDidMount() {
    this.props.getGames()
  }

  render() {

    const { games } = this.props

    let displayGames

    if (games){
      displayGames =
        games.map( game => <img key={game.gameId} src={game.images[0].url} alt=""/> )
    } else {
      displayGames = <h2>Ruh roh...</h2>
    }

    return (
      <>
        <h1>Bede Games</h1>
        {displayGames}
      </>
    )
  }
}

// Redux
// Get data from store and add to props
const mapStateToProps = store => ({ 
  games: store.games,
})
// Pass actionCreators into props
const mapDispatchToProps = dispatch => bindActionCreators(
  { getGames }, dispatch
)


export default connect(mapStateToProps, mapDispatchToProps)(BoltGamesTest)

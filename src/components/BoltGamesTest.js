// imports
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Card } from './'

// actionCreators
import { getGames } from '../redux/duckGames'

const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ErrorText = styled.h1`
  color: red;
`

// Components
class BoltGamesTest extends Component {

  componentDidMount() {
    this.props.getGames()
  }

  render() {

    const { games } = this.props

    return (
      <>
        {
          games
          ? <GamesContainer>
              {
                games.map((game, i) =>
                  <Card
                    data={game}
                    key={i}
                  />
                )
              }
            </GamesContainer>
          : <ErrorText>Ruh roh...</ErrorText>
        }
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

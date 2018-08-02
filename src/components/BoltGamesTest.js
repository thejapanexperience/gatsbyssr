// imports
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'

// actionCreators
import { getGames } from '../redux/duckGames'

// Components
import { Card, Button } from './'

// Styled Components
const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  perspective: 1000px;
`

const ErrorText = styled.h1`
  color: red;
`

const StyledButton = styled(Button)`
  background-color: rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255,255,255,0.6);
  border-radius: 5px;
  color: #fff;
  overflow: hidden;
  position: relative;
  transition: all 300ms ease;

  &::before {
    background-color: rgba(255,255,255,0.1);
    border-radius: 50%;
    content: '';
    height: 300px;
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: scale(0) translate(-50%, -50%);
    transform-origin: top left;
    transition: all 700ms cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 300px;
  }

  &:hover {
    background-color: rgba(0,0,0,0);
    border-color: rgba(255,255,255,1);

    &::before {
      transform: scale(1) translate(-50%, -50%);
    }
  }
`

class BoltGamesTest extends Component {

  state = {
    games: this.props.games,
    alphabetical: false,
  }

  componentDidMount() {
    if (this.props.games.length < 1) {
      this.props.getGames()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.games !== prevProps.games){
      this.filterGames('live')
    }
  }

  sortGamesAlphabetically(){
    const games = this.state.games.sort(((a,b) => {
      if(a.catalogueName < b.catalogueName) return -1
      if(a.catalogueName > b.catalogueName) return 1
      return 0
    }))
    if (this.state.alphabetical){games.reverse()}
    this.setState({
      games,
      alphabetical: !this.state.alphabetical
    })
  }

  filterGames(type = 'live'){
    const games = this.props.games
    let filteredGames
    if (type === 'virtual'){
      filteredGames = games.filter( game => {
          return (game.categories[0] && game.categories[0].name === 'virtual-theritz.com')
      })
    } else {
      filteredGames = games.filter( game => {
        return (game.categories[0] && game.categories[0].name === 'live-theritz.com')
      })
    }
    this.setState({
      games: filteredGames,
      alphabetical: false
    })
  }

  render() {

    const { games } = this.state

    return (
      <>
      <StyledButton onClick={() => this.sortGamesAlphabetically()}>
        Alphabetical
      </StyledButton>
      <StyledButton onClick={ () => this.filterGames('live')} >
        Live Casino
      </StyledButton>
      <StyledButton onClick={ () => this.filterGames('virtual')} >
        Virtual Casino
      </StyledButton>
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

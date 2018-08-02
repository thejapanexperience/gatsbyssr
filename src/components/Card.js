import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Button from './Button'

const Container = styled(Link)`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 12px rgba(22,20,20,0.1);
  margin-bottom: 2rem;
  overflow: hidden;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 31%;
`

const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 125px;
  overflow: hidden;
`

const Image = styled.img`
  flex: 1;
  width: 100%;
`

const Details = styled.div`
  padding: 2rem;
`

const Title = styled.h1`
  color: #7C7F8C;
  font-size: 2rem;
  margin: 0;
`

const MinMax = styled.span`
  color: #7C7F8C;
  display: block;
  font-size: 1.2rem;
`

const Min = styled(MinMax)`

`

const Max = styled(MinMax)`

`

const Card = ({ data, to }) =>
  <Container>

    <ImageContainer>

      <Button to={to}>Play</Button>

      <Image
        alt={data.displayName}
        src={data.images[0].url}
      />
    </ImageContainer>

    <Details>
      <Title>{data.displayName}</Title>
      <Min>{`Minimum bet £${data.minBet}`}</Min>
      <Max>{`Maximum bet £${data.maxBet}`}</Max>
    </Details>

  </Container>

export default Card

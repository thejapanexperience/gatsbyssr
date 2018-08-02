import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled(Link)`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 12px rgba(22,20,20,0.1);
  margin-bottom: 2rem;
  overflow: hidden;
  width: 30%;
`

const Image = styled.img`
  margin-bottom: 1rem;
  width: 100%;
`

const Card = ({ data }) =>
  <Container>
    <Image
      alt={data.displayName}
      src={data.images[0].url}
    />
    <h2>{data.displayName}</h2>
  </Container>

export default Card

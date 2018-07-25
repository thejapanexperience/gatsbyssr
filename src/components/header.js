import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  background: #010101;
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Inner>
      <StyledLink to='/'>
        {siteTitle}
      </StyledLink>
    </Inner>
  </Container>
)

export default Header

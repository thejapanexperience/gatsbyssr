import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  background: #010101;
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`

const StyledLink = styled(Link)`
  color: #fff;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Inner>
      <StyledLink to='/'>
        {siteTitle}
      </StyledLink>
      <StaticQuery
        query={graphql`
          query Navigation {
            allNavigationJson {
              edges {
                node {
                  title
                  url
                }
              }
            }
          }
        `}
        render={data => (
          <Navigation>
            {
              data.allNavigationJson.edges.map(({ node: navItem }, i) =>
                <StyledLink
                  key={i}
                  to={navItem.url}
                >
                  {navItem.title}
                </StyledLink>
              )
            }
          </Navigation>
        )}
      />
    </Inner>
  </Container>
)

export default Header

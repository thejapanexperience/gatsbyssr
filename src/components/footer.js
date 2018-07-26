import React from 'react'
import { StaticQuery } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  background: #010101;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Text = styled.p`
  color: #fff;
`

const Footer = () => (
  <Container>
    <Inner>
      <StaticQuery
        query={graphql`
          query {
            site {
              buildTime(formatString: "DD/MM/YYYY")
            }
          }
        `}
        render={data => (
          <>
            <Text>Build date {data.site.buildTime}</Text>
          </>
        )}
      />
    </Inner>
  </Container>
)

export default Footer

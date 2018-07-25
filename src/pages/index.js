import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledImage = styled(Img)`
`

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        fillmurray: imageSharp {
          sizes(quality: 90) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <h1>Hi people</h1>
        <Link to='/page-2'>title</Link>
        <Flex>
          <StyledImage
            sizes={data.fillmurray.sizes}
          />
        </Flex>
      </Layout>
    )}
  />
)

export default Index

import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Layout } from '../components'

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
`

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        fillMurray: imageSharp {
          sizes(quality: 90) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <h1>Hi people</h1>
        <Link to='/page-2'>Go to page 2</Link>
        <Flex>
          <Img sizes={data.fillMurray.sizes} />
        </Flex>
      </Layout>
    )}
  />
)

export default Index

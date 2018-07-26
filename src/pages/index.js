import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Layout } from '../components'

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
        <Img sizes={data.fillMurray.sizes} />

      </Layout>
    )}
  />
)

export default Index

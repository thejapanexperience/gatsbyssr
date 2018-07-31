import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Layout } from '../components'

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        banner: imageSharp(original: {
          src: {
            regex: "/banner/"
          }
        }) {
          sizes(quality: 90) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    `}
    render={data => (
      <Layout
        banner={<Img sizes={data.banner.sizes} />}
      >

        <div>
          <h1>hi</h1>
        </div>

      </Layout>
    )}
  />
)

export default Index

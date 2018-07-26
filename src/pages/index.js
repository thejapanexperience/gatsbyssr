import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
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
        content: markdownRemark(fileAbsolutePath: { regex: "/data/homepage/" }) {
          frontmatter {
            title
          }
          html
        }
      }
    `}
    render={data => (
      <Layout>

        <h1 dangerouslySetInnerHTML={{__html: data.content.frontmatter.title }} />
        <div dangerouslySetInnerHTML={{__html: data.content.html}} />
        <Img sizes={data.fillMurray.sizes} />

      </Layout>
    )}
  />
)

export default Index

import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal } from 'styled-components'

import { Header, Footer } from '.'

injectGlobal`
  html {
    font-size: 62.5%;
  }

  body {
    background-color: #F9F9F9;
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1.6rem;
    line-height: 1.5;
    margin: 0;
  }
`

const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 80vh;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const Layout = ({ banner, children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Header siteTitle={data.site.siteMetadata.title} />

        {
          banner
          ? banner
          : null
        }

        <Content>
          {children}
        </Content>

        <Footer />
      </>
    )}
  />
)

export default Layout

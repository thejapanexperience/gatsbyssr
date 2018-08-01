import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Layout, Tab, TabList, Tabs, TabPanel } from '../components'

const StyledTabList = styled(TabList)`
  transform: translateY(-50%);
`

const tabData = [
  { "title": "Featured" },
  { "title": "Slots" },
  { "title": "Tables" },
  { "title": "Live Casino" }
]

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

        <Tabs>
          <StyledTabList>
            {
              tabData.map((tab, i) =>
                <Tab>{tab.title}</Tab>
              )
            }
          </StyledTabList>

          <TabPanel>Hi</TabPanel>
          <TabPanel>Hi</TabPanel>
          <TabPanel>Hi</TabPanel>
          <TabPanel>Hi</TabPanel>
        </Tabs>

      </Layout>
    )}
  />
)

export default Index

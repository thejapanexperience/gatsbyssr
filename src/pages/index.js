import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import { Layout, Tab, TabList, Tabs, TabPanel, BoltGamesTest } from '../components'

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
        banner: allBannerJson {
          edges {
            node {
              title
              subtitle
              buttonTo
              buttonTitle
              bannerImage {
                childImageSharp {
                  sizes(maxWidth: 1440, quality: 90) {
                    ...GatsbyImageSharpSizes_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout
        bannerData={data.banner.edges}
      >

        <Tabs>
          <StyledTabList>
            {
              tabData.map((tab, i) =>
                <Tab key={i}>{tab.title}</Tab>
              )
            }
          </StyledTabList>

          <TabPanel>
            <BoltGamesTest />
          </TabPanel>

          <TabPanel>
            hi
          </TabPanel>

          <TabPanel>
            <BoltGamesTest />
          </TabPanel>

          <TabPanel>
            <BoltGamesTest />
          </TabPanel>

        </Tabs>

      </Layout>
    )}
  />
)

export default Index

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from './Button'

const Container = styled.figure`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 53rem;
  position: relative;
  z-index: 0;
`

const Slide = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

const Text = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${props => props.marginBottom ? '2rem' : 0};

  h1, h2 {
    color: #fff;
    margin: 0;
  }

  h1 {
    text-transform: uppercase;
  }
`

const BgImg = styled(Img)`
  left: 0;
  height: 100%;
  top: 0;
  width: 100%;
  z-index: -1;
`

const StyledButton = styled(Button)`
  background-color: rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255,255,255,0.6);
  border-radius: 5px;
  color: #fff;
  transition: all 300ms ease;

  &:hover {

  }
`

const Banner = ({ data }) =>
  <Container>
    {
      data.map(({ node: banner }, i) =>
        <Slide key={i}>

          <Text marginBottom={banner.buttonTo && banner.buttonTitle}>
            <h1>{banner.title}</h1>
            <h2>{banner.subtitle}</h2>
          </Text>

          {
            banner.buttonTo && banner.buttonTitle
            ? <StyledButton>{banner.buttonTitle}</StyledButton>
            : null
          }

          <BgImg
            sizes={banner.bannerImage.childImageSharp.sizes}
            style={{ position: 'absolute' }}
          />

        </Slide>
      )
    }
  </Container>

export default Banner

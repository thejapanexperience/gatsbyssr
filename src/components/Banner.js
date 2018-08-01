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
  perspective: 1000;
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
  overflow: hidden;
  position: relative;
  transition: all 300ms ease;

  &::before {
    background-color: rgba(255,255,255,0.1);
    border-radius: 50%;
    content: '';
    height: 300px;
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: scale(0) translate(-50%, -50%);
    transform-origin: top left;
    transition: all 700ms cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 300px;
  }

  &:hover {
    background-color: rgba(0,0,0,0);
    border-color: rgba(255,255,255,1);

    &::before {
      transform: scale(1) translate(-50%, -50%);
    }
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
            ? <StyledButton to={banner.buttonTo}>
                {banner.buttonTitle}
              </StyledButton>
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

import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  background: rgba(255,255,255,0.95);
  box-shadow: 0 2px 12px rgba(22, 20, 20, .2);
  display: flex;
  position: relative;
  z-index: 1;
`

const Navigation = styled.div`
  align-items: center;
  display: flex;
`

const LogoLink = styled(Link)`
  align-items: center;
  display: flex;
  padding: 2rem 3rem;
`

const StyledLink = styled(Link)`
  align-items: center;
  color: #3E3135;
  display: flex;
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  padding: 4.65rem 4rem;
  position: relative;

  &::before {
    background-color: #e7f0f9;
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

  span {
    position: relative;
    transition: all 200ms ease;
    opacity: 0.8;
    z-index: 2;
  }

  &:hover {

    &::before {
      transform: scale(1) translate(-50%, -50%);
    }

    span {
      opacity: 1;
    }

  }
`

const Buttons = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  padding-right: 2rem;
`

const Login = styled(Button)`
  background-color: #fff;
  border: 3px solid #DF125D;
  color: #E21455;
`

const JoinNow = styled(Button)`
  background-image: linear-gradient(180deg, #EF2033 0%, #FE3D91 100%);
  color: #fff;
  margin-left: 2rem;
  padding: 2.3rem 3rem;
`

const Header = () => (
  <Container>

    <StaticQuery
      query={graphql`
        query Navigation {
          allNavigationJson {
            edges {
              node {
                title
                url
              }
            }
          }
        }
      `}
      render={data => (
        <Navigation>
          <LogoLink to='/'>
            <svg width='148' height='51' viewBox='0 0 148 51' xmlns='http://www.w3.org/2000/svg'>
              <g fill='#DB0E17' fillRule='nonzero'>
                <path d='M36.3208081,17.7991731 L31.1516129,26.6626325 C29.6173379,22.2307774 25.3979559,19.0392898 20.429528,19.0392898 C14.4200747,19.0392898 9.50667572,23.7079788 9.10488964,29.6170353 L9.10488964,30.3829823 C9.08654669,36.6385088 14.1642784,41.7266749 20.447871,41.7266749 C37.1975008,41.7266749 31.8823158,10.1397032 56.0844618,10.1397032 C67.2814533,10.1397032 76.3777997,19.2036184 76.3777997,30.4012968 C76.3777997,31.6597279 76.2679932,32.8998445 76.0307912,34.103583 L45.3075993,34.103583 L45.6365161,34.8331519 C47.3718098,38.8999717 51.3901732,41.7452403 56.0844618,41.7452403 C59.4819287,41.7452403 62.5323871,40.2497244 64.614438,37.8788763 L71.3362513,43.7513039 C67.6101188,47.9822014 62.1667844,50.6633922 56.0661188,50.6633922 C49.5636672,50.6633922 43.7733243,47.5993534 40.0652835,42.8576572 L48.2665942,26.6995124 L66.8062954,26.6995124 C65.2720204,22.2495936 61.0526384,19.058106 56.0661188,19.058106 C39.4077012,19.058106 44.9970255,50.6453286 20.429528,50.6453286 C9.21444482,50.627265 0.136441426,41.5630989 0.136441426,30.3654205 L0.136441426,0.0913215548 L9.10488964,0.0913215548 L9.10488964,13.5687774 C12.3377725,11.3795689 16.2282377,10.1211378 20.429528,10.1211378 C26.8774533,10.1211378 32.6127674,13.1119187 36.3208081,17.7991731 Z' />
                <path d='M103.392448,13.5680247 L103.392448,0.0541908127 L112.360645,0.0541908127 L112.360645,10.7230071 L107.958587,17.7808587 L103.392197,25.6229717 L102.789392,26.6626325 C101.255117,22.2307774 97.0357351,19.0392898 92.0673073,19.0392898 C85.8020577,19.0392898 80.705983,24.1093922 80.705983,30.3829823 C80.705983,36.6385088 85.783966,41.7266749 92.0673073,41.7266749 C108.817188,41.7266749 103.903538,10.1397032 127.703898,10.1397032 C138.90089,10.1397032 147.997236,19.2036184 147.997236,30.4012968 C147.997236,31.6597279 147.88743,32.8998445 147.649976,34.103583 L116.963722,34.103583 L117.109711,34.5047456 C118.753542,38.7356431 122.881711,41.7266749 127.685555,41.7266749 C131.083022,41.7266749 134.13348,40.231159 136.215783,37.8605618 L143.302696,43.2951979 C139.576564,47.7814947 133.968896,50.6448269 127.667212,50.6448269 C121.164509,50.6448269 115.374418,47.5810389 111.666377,42.8393428 L119.703104,26.680947 L138.407389,26.680947 C136.873114,22.2310283 132.653732,19.0395406 127.667212,19.0395406 C111.008795,19.0395406 117.091368,50.6267633 92.0308727,50.6267633 C80.8338812,50.6267633 71.7375348,41.5625972 71.7375348,30.3649187 C71.774472,19.185053 80.8708183,10.1211378 92.0675586,10.1211378 C96.2688489,10.1211378 100.159314,11.3976325 103.392448,13.5680247 Z' />
              </g>
            </svg>
          </LogoLink>
          {
            data.allNavigationJson.edges.map(({ node: navItem }, i) =>
              <StyledLink
                key={i}
                to={navItem.url}
              >
                <span>{navItem.title}</span>
              </StyledLink>
            )
          }
        </Navigation>
      )}
    />

    <Buttons>

      <Login>Log in</Login>
      <JoinNow>Join now</JoinNow>

    </Buttons>

  </Container>
)

export default Header

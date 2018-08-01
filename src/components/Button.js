import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledButton = styled(Link)`
  align-items: center;
  background-color: pink;
  border: 0;
  border-radius: 3px;
  display: flex;
  font-size: 1.8rem;
  font-weight: 700;
  justify-content: center;
  padding: 2rem 3rem;
  text-decoration: none;
  text-transform: uppercase;
`

const Button = ({children, className, onClick, to}) => (
  <StyledButton
    className={className}
    onClick={onClick}
    to={to}
  >
    {children}
  </StyledButton>
)

export default Button

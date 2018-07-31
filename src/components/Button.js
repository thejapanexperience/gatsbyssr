import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: pink;
  border: 0;
  border-radius: 3px;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 2rem;
  text-transform: uppercase;
`

const Button = ({children, className, onClick}) => (
  <StyledButton
    className={className}
    onClick={onClick}
  >
    {children}
  </StyledButton>
)

export default Button

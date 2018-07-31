import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: pink;
  border: 0;
  border-radius: 10px;
  font-size: 1.25rem;
  padding: 20px;
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

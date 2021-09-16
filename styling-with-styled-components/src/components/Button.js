import React from 'react'
import styled, { css }  from 'styled-components'
import { darken, lighten } from 'polished'

const colorStyles = css`
 ${props => {
    const selected = props.theme.palette[props.color];
    return css`
      background-color: ${selected};
      &:hover {
        background-color: ${lighten(0.1, selected)};
      }
      &:active {
        background-color: ${darken(0.1, selected)};
      }
      ${props => props.outline && css`
        color: ${selected};
        background: none;
        border: 1px solid ${selected};
        &:hover {
          background-color: ${selected};
          color: #fff;
        }
      `}
    `
  }}
`

const sizes = {
  large: {
    height: '2.5rem', 
    fontSize: '1.25rem'
  },
  medium: {
    height: '2rem', 
    fontSize: '1rem'
  },
  small: {
    height: '1.5rem', 
    fontSize: '0.875rem'
  }
}

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`

const fullWidthStyle = css`
  ${props => props.fullWidth && css`
    width: 100%;
    justify-content: center;
    & + button {
      margin: 1rem 0 0;
    }
  `}
`

const StyledButton = styled.button`
  /* common style */
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  
  /* other */
  & + button {
    margin-left: 1rem;
  }

  /* color */
  ${colorStyles}
  
  /* size */
  ${sizeStyles}
  ${fullWidthStyle}

`;

function Button({children, color, size, outline, fullWidth, ...rest}) {
  return (
    <>
      <StyledButton {...rest} color={color} size={size} outline={outline} fullWidth={fullWidth}>
        {children}
      </StyledButton> 
    </>
  )
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
}

export default Button

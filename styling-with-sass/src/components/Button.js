import React from 'react'
import classNames from 'classnames'
import './button.scss'

// size: large, medium, small
// color: blue, pink, gray
function Button({children, size, color, outline, full_width, className, ...rest}) {
  console.log('rest >>>', rest);
  return (
    <>
      <button type="button" className={classNames('btn', size, color, { outline, full_width}, className)} {...rest}>{children}</button> 
    </>
  )
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
}

export default Button

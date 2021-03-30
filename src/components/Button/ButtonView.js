import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  background: #9BDBE7;
  border-radius: 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  padding: 16px;
  color: #FFFFFF;
  border: unset;
  cursor: pointer;
`

function ButtonView({
  children,
  ...props
}) {
  return(
    <Button {...props}>{children}</Button>
  )
}

ButtonView.defaultProps = {
  children: '',
}

ButtonView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default ButtonView

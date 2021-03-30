import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = styled.p`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => typeof fontSize === 'number' ? `${fontSize}px` : `${fontSize}`};
  line-height: ${({ lineHeight }) => typeof lineHeight === 'number' ? `${lineHeight}px` : `${lineHeight}`};;
  margin: 0px;
`

function TextView({
  children,
  fontSize,
  fontWeight,
  lineHeight,
  ...props
}) {
  return(
    <Text
      {...props}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </Text>
  )
}

TextView.defaultProps = {
  children: '',
  color: 'inherit',
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 32,
}

TextView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default TextView

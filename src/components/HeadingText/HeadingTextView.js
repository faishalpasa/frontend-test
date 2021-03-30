import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeadingOne = styled.h1`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => typeof fontSize === 'number' ? `${fontSize}px` : `${fontSize}`};
  line-height: ${({ lineHeight }) => typeof lineHeight === 'number' ? `${lineHeight}px` : `${lineHeight}`};;
  margin: 0px;
`
const HeadingTwo = styled.h2`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => typeof fontSize === 'number' ? `${fontSize}px` : `${fontSize}`};
  line-height: ${({ lineHeight }) => typeof lineHeight === 'number' ? `${lineHeight}px` : `${lineHeight}`};;
  margin: 0px;
`
const HeadingThree = styled.h3`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => typeof fontSize === 'number' ? `${fontSize}px` : `${fontSize}`};
  line-height: ${({ lineHeight }) => typeof lineHeight === 'number' ? `${lineHeight}px` : `${lineHeight}`};;
  margin: 0px;
`
const HeadingFour = styled.h4`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => typeof fontSize === 'number' ? `${fontSize}px` : `${fontSize}`};
  line-height: ${({ lineHeight }) => typeof lineHeight === 'number' ? `${lineHeight}px` : `${lineHeight}`};;
  margin: 0px;
`
const HeadingFive = styled.h5`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => typeof fontSize === 'number' ? `${fontSize}px` : `${fontSize}`};
  line-height: ${({ lineHeight }) => typeof lineHeight === 'number' ? `${lineHeight}px` : `${lineHeight}`};;
  margin: 0px;
`
const HeadingSix = styled.h6`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => typeof fontSize === 'number' ? `${fontSize}px` : `${fontSize}`};
  line-height: ${({ lineHeight }) => typeof lineHeight === 'number' ? `${lineHeight}px` : `${lineHeight}`};;
  margin: 0px;
`

function HeadingTextView({
  children,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  type,
  ...props
}) {
  if (type === 'h1') {
    return (
      <HeadingOne {...props} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} color={color}>
        {children}
      </HeadingOne>
    )
  } else if (type === 'h2') {
    return (
      <HeadingTwo {...props} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} color={color}>
        {children}
      </HeadingTwo>
    )
  } else if (type === 'h3') {
    return (
      <HeadingThree {...props} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} color={color}>
        {children}
      </HeadingThree>
    )
  } else if (type === 'h4') {
    return (
      <HeadingFour {...props} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} color={color}>
        {children}
      </HeadingFour>
    )
  } else if (type === 'h5') {
    return (
      <HeadingFive {...props} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} color={color}>
        {children}
      </HeadingFive>
    )
  } else if (type === 'h6') {
    return (
      <HeadingSix {...props} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} color={color}>
        {children}
      </HeadingSix>
    )
  } else {
    return null
  }
}

HeadingTextView.defaultProps = {
  children: '',
  color: 'inherit',
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 32,
  type: 'h1',
}

HeadingTextView.propTypes = {
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
  ]),
  type: PropTypes.string
}

export default HeadingTextView

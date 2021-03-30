import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  background: #FFFFFF;
  box-shadow: inset 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  padding: 16px 24px;
  border: unset;
  ::placeholder {
    color: #CDCDCD;
  }
  :focus {
    outline: unset;
  }
`

function InputFieldView({
  ...props
}) {
  return(
    <Input {...props} />
  )
}

export default InputFieldView
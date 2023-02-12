import styled from 'styled-components'
import { wrapperStyle } from '../sharedStyles'

const Button = styled.button`
  ${wrapperStyle}

  cursor: pointer;

  background-color: #64e;

  &:active {
    color: #64e;
    background-color: #fff;
    outline: 2px solid #64e;
  }
`

export default Button

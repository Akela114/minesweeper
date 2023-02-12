import styled from 'styled-components'
import { wrapperStyle } from '../sharedStyles'

const Button = styled.button`
  ${wrapperStyle}

  cursor: pointer;

  &:active {
    color: #444;
    background-color: #fff;
    outline: 2px solid #444;
  }
`

export default Button

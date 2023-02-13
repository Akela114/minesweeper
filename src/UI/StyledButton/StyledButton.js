import styled from 'styled-components'
import { wrapperStyle } from '../sharedStyles'

const StyledButton = styled.button`
  ${wrapperStyle}

  text-decoration: none;

  cursor: pointer;

  background-color: #64e;

  &:active {
    color: #64e;
    background-color: #fff;
    outline: 2px solid #64e;
  }
`

export default StyledButton

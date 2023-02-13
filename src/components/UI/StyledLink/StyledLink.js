import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { wrapperStyle } from '../sharedStyles'

const StyledLink = styled(Link)`
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

export default StyledLink

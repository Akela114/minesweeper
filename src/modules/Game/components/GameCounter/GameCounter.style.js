import styled from 'styled-components'
import {
  wrapperStyle,
  imageStyle,
} from '../../../../components/UI/sharedStyles'

export const CounterWrapper = styled.div`
  ${wrapperStyle}

  background-color: #44e;
  display: flex;
  gap: 8px;

  @media (orientation: portrait) {
    flex: 1;
  }
`

export const CounterImage = styled.img`
  ${imageStyle}
`

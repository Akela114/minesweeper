import styled from 'styled-components'
import { wrapperStyle, imageStyle } from '../../../../UI/sharedStyles'

export const TimerWrapper = styled.div`
  ${wrapperStyle}

  background-color: #e44;
  display: flex;
  gap: 8px;

  @media (orientation: portrait) {
    flex: 1;
  }
`

export const TimerImage = styled.img`
  ${imageStyle}
`

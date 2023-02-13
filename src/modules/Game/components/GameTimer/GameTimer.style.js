import styled from 'styled-components'
import { wrapperStyle, imageStyle } from '../../../../UI/sharedStyles'

export const TimerWrapper = styled.div`
  ${wrapperStyle}

  background-color: #e44;
  display: flex;
  gap: 8px;

  min-width: 150px;

  @media (orientation: portrait) {
    flex: 1;
    min-width: 120px;
  }
`

export const TimerImage = styled.img`
  ${imageStyle}
`

export const TimerValue = styled.span`
  flex: 1;
`

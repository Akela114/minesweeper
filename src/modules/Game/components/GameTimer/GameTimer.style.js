import styled from 'styled-components'
import {
  wrapperStyle,
  imageStyle,
} from '../../../../components/UI/sharedStyles'

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

export const TimerValue = styled.span`
  min-width: 44px;

  @media (orientation: landscape) {
    @media (max-height: 560px) or (max-width: 1035px) {
      min-width: 40px;
    }

    @media (max-height: 485px) or (max-width: 875px) {
      min-width: 36px;
    }

    @media (max-height: 395px) or (max-width: 715px) {
      min-width: 34px;
    }

    @media (max-height: 365px) or (max-width: 665px) {
      min-width: 30px;
    }
  }

  @media (orientation: portrait) {
    @media (max-height: 1040px) or (max-width: 420px) {
      min-width: 38px;
    }

    @media (max-height: 880px) or (max-width: 345px) {
      min-width: 36px;
    }

    @media (max-height: 795px) or (max-width: 310px) {
      min-width: 32px;
    }

    @media (max-height: 730px) or (max-width: 280px) {
      min-width: 30px;
    }
  }
`

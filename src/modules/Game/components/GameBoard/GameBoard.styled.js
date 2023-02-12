import styled from 'styled-components'

export const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.width > props.height ? 'row' : 'column')};

  border: 4px solid #666;

  @media (orientation: portrait) {
    flex-direction: ${(props) =>
      props.width > props.height ? 'column' : 'row'};
  }
`

Board.Row = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.width > props.height ? 'column' : 'row')};

  ${(props) => {
    return props.width <= props.height
      ? `
        &:not(:last-of-type) {
          border-bottom: 2px solid #999;
        }

        @media (orientation: portrait) {
          &:not(:last-of-type) {
            border-bottom: 0;
            border-right: 2px solid #999;
          }
        }`
      : `
        &:not(:last-of-type) {
          border-right: 2px solid #999;
        }

        @media (orientation: portrait) {
          &:not(:last-of-type) {
            border-right: 0;
            border-bottom: 2px solid #999;
          }
        }`
  }}

  @media (orientation: portrait) {
    flex-direction: ${(props) =>
      props.width > props.height ? 'row' : 'column'};
  }
`

Board.Ceil = styled.div`
  font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 20)}px;
  font-weight: 500;
  color: #333;

  cursor: pointer;

  width: ${(props) => Math.trunc(props.fontSizeMultiplier * 45)}px;
  height: ${(props) => Math.trunc(props.fontSizeMultiplier * 45)}px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    if (props.isVisible) {
      return props.isBomb ? '#ecc' : '#fff'
    }
    return props.status === 'flag'
      ? '#ff8'
      : props.status === 'question'
      ? '#66e'
      : '#ddd'
  }};

  ${(props) => {
    return props.width <= props.height
      ? `
        &:not(:last-of-type) {
          border-right: 2px solid #999;
        }

        @media (orientation: portrait) {
          &:not(:last-of-type) {
            border-right: 0;
            border-bottom: 2px solid #999;
          }
        }`
      : `
        &:not(:last-of-type) {
          border-bottom: 2px solid #999;
        }

        @media (orientation: portrait) {
          &:not(:last-of-type) {
            border-bottom: 0;
            border-right: 2px solid #999;
          }
        }`
  }}

  @media (orientation: landscape) {
    @media (max-height: 830px) or (max-width: 1520px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 40)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 40)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 19)}px;
    }

    @media (max-height: 750px) or (max-width: 1355px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 35)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 35)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 18)}px;
    }

    @media (max-height: 670px) or (max-width: 1195px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 30)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 30)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 17)}px;
    }

    @media (max-height: 560px) or (max-width: 1035px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 25)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 25)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 16)}px;
    }

    @media (max-height: 485px) or (max-width: 875px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 20)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 20)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 15)}px;
    }

    @media (max-height: 395px) or (max-width: 715px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 18)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 18)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 14)}px;
    }

    @media (max-height: 365px) or (max-width: 665px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 16)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 16)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 13)}px;
    }

    @media (max-height: 339px) or (max-width: 600px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 14)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 14)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 12)}px;
    }
  }

  @media (orientation: portrait) {
    @media (max-height: 1665px) or (max-width: 760px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 40)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 40)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 19)}px;
    }

    @media (max-height: 1500px) or (max-width: 675px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 35)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 35)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 18)}px;
    }

    @media (max-height: 1340px) or (max-width: 585px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 30)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 30)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 17)}px;
    }

    @media (max-height: 1175px) or (max-width: 515px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 25)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 25)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 16)}px;
    }

    @media (max-height: 1040px) or (max-width: 420px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 20)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 20)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 15)}px;
    }

    @media (max-height: 880px) or (max-width: 345px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 18)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 18)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 14)}px;
    }

    @media (max-height: 795px) or (max-width: 310px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 16)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 16)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 13)}px;
    }

    @media (max-height: 730px) or (max-width: 280px) {
      width: ${(props) => Math.trunc(props.fontSizeMultiplier * 14)}px;
      height: ${(props) => Math.trunc(props.fontSizeMultiplier * 14)}px;
      font-size: ${(props) => Math.trunc(props.fontSizeMultiplier * 12)}px;
    }
  }
`
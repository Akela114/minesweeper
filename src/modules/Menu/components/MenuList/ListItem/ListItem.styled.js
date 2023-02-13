import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ItemWrapper = styled(Link)`
  flex: 1;
  padding: 28px 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: c;

  cursor: pointer;

  text-decoration: none;

  border: 6px solid
    ${(props) =>
      props.bgColor === 'green'
        ? '#ABEBC6'
        : props.bgColor === 'blue'
        ? '#AED6F1'
        : props.bgColor === 'red'
        ? '#F5B7B1'
        : 'transparent'};

  background-color: ${(props) =>
    props.bgColor === 'green'
      ? '#28B463'
      : props.bgColor === 'blue'
      ? '#2E86C1'
      : props.bgColor === 'red'
      ? '#CB4335'
      : 'transparent'};

  border-radius: 8px;

  font-size: 20px;
  font-weight: 500;

  color: #fff;

  &:active {
    border-color: transparent;
  }

  @media (orientation: landscape) {
    @media (max-height: 750px) or (max-width: 1355px) {
      font-size: 19px;
    }

    @media (max-height: 670px) or (max-width: 1195px) {
      font-size: 18px;
    }

    @media (max-height: 560px) or (max-width: 1035px) {
      font-size: 17px;
    }

    @media (max-height: 485px) or (max-width: 875px) {
      font-size: 16px;
    }
  }

  @media (orientation: portrait) {
    @media (max-height: 1355px) {
      font-size: 19px;
    }

    @media (max-height: 1195px) {
      font-size: 18px;
    }

    @media (max-height: 1035px) {
      font-size: 17px;
    }

    @media (max-height: 875px) {
      font-size: 16px;
    }
  }
`

export const Title = styled.h2`
  align-self: stretch;

  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 12px;
`

export const Info = styled.div`
  line-height: 100%;

  font-size: 0.9em;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 10px;

  margin-left: 12px;

  white-space: nowrap;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`

export const InfoImg = styled.img`
  height: 22px;

  @media (orientation: landscape) {
    @media (max-height: 750px) or (max-width: 1355px) {
      height: 21px;
    }

    @media (max-height: 670px) or (max-width: 1195px) {
      height: 20px;
    }

    @media (max-height: 560px) or (max-width: 1035px) {
      height: 19px;
    }

    @media (max-height: 485px) or (max-width: 875px) {
      height: 18px;
    }
  }

  @media (orientation: portrait) {
    @media (max-height: 1355px) {
      font-size: 21px;
    }

    @media (max-height: 1195px) {
      font-size: 20px;
    }

    @media (max-height: 1035px) {
      font-size: 19px;
    }

    @media (max-height: 875px) {
      font-size: 18px;
    }
  }
`

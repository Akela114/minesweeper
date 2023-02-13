import styled from 'styled-components'
import StyledButton from '../../components/UI/StyledButton'
import StyledLink from '../../components/UI/StyledLink'
import { wrapperStyle } from '../../components/UI/sharedStyles'

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  @media (orientation: landscape) {
    align-self: stretch;
    flex: 1;
  }

  @media (orientation: portrait) {
    padding: 8px 0;
  }
`

export const GameHeader = styled.div`
  align-self: stretch;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 24px;

  padding: 10px 12px;

  @media (orientation: portrait) {
    flex-direction: column;
    padding: 0;
    gap: 6px;
  }

  @media (orientation: landscape) {
    background-color: #64e3;

    @media (max-height: 750px) or (max-width: 1355px) {
      font-size: 21px;
      padding: 4px;
    }
  }
`

export const GameInfo = styled.div`
  align-self: stretch;

  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 6px;

  @media (orientation: portrait) {
    order: 2;
  }
`

export const GameActions = styled.div`
  ${(props) =>
    props.status === 'none' || props === 'active' ? 'flex: 1;' : ''}
  align-self: stretch;

  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  gap: 6px;

  @media (orientation: portrait) {
    order: 3;
  }
`

GameActions.Button = styled(StyledButton)`
  @media (orientation: portrait) {
    flex: 1;
  }
`

GameActions.Link = styled(StyledLink)`
  @media (orientation: portrait) {
    flex: 1;
  }
`

export const GameBody = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameNotification = styled.div`
  ${wrapperStyle}

  box-sizing: border-box;

  flex: 1;

  font-weight: 600;
  color: ${(props) =>
    props.color === 'red' ? '#e44' : props.color === 'green' ? '#393' : '#444'};
  background-color: #fff;
  outline: 2px solid
    ${(props) =>
      props.color === 'red'
        ? '#e44'
        : props.color === 'green'
        ? '#393'
        : '#444'};
  outline-offset: -2px;

  @media (orientation: portrait) {
    order: 1;

    color: #fff;
    background-color: ${(props) =>
      props.color === 'red'
        ? '#e44'
        : props.color === 'green'
        ? '#393'
        : '#444'};
    outline: 0;
  }
`

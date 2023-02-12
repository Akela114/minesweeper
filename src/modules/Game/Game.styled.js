import styled from 'styled-components'
import Button from '../../UI/Button'

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
`

export const GameHeader = styled.div`
  align-self: stretch;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  padding: 8px 12px;

  @media (orientation: portrait) {
    flex-direction: column;
    padding: 0;
  }

  @media (orientation: landscape) {
    background-color: #eee;

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
  align-items: center;
  gap: 6px;
`

export const GameActions = styled.div`
  align-self: stretch;

  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 6px;
`

GameActions.Button = styled(Button)`
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

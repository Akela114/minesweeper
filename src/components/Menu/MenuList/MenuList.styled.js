import styled from 'styled-components'

export const ListWrapper = styled.div`
  align-self: stretch;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media (orientation: landscape) and (max-height: 680px) {
    flex-direction: row;
  }
`

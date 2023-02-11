import styled from 'styled-components'

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

Board.Row = styled.div`
  display: flex;
  gap: 2px;
`

Board.Ceil = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #111;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => {
    if (props.isVisible) {
      return props.isBomb ? '#eaa' : '#fff'
    }

    return props.status === 'flag'
      ? '#ff8'
      : props.status === 'question'
      ? '#aae'
      : '#ddd'
  }};
`

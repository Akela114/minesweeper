import { PropTypes } from 'prop-types'
import { useState } from 'react'
import { Board } from './GameBoard.styled'
import generateGameBoard from './lib/generateGameBoard'
import createGameBoardMask from './lib/createGameBoardMask'
import updateGameBoardMask from './lib/updateGameBoardMask'
import toggleGameBoardMaskFlag from './lib/toggleGameBoardMaskFlag'

const GameBoard = ({ options: { width, height, numOfMines } }) => {
  const [boardIsFilled, setBoardIsFilled] = useState(false)
  const [board, setBoard] = useState(generateGameBoard(width, height, 0))
  const [boardMask, setBoardMask] = useState(createGameBoardMask(width, height))

  const handleCeilRightClick = (y, x) => {
    if (boardMask[y][x].status === 'flag') {
      return
    }

    if (!boardIsFilled) {
      const newBoard = generateGameBoard(width, height, numOfMines, [[y, x]])
      setBoard(newBoard)
      setBoardIsFilled(true)

      setBoardMask((prev) => updateGameBoardMask(prev, newBoard, [[y, x]]))
    } else {
      setBoardMask((prev) => updateGameBoardMask(prev, board, [[y, x]]))
    }
  }

  const handleCeilLeftClick = (e, y, x) => {
    e.preventDefault()
    setBoardMask((prev) => toggleGameBoardMaskFlag(prev, [y, x]))
  }

  return (
    <Board>
      {board &&
        board.map((row, y) => (
          <Board.Row key={y}>
            {row.map((ceilVal, x) => (
              <Board.Ceil
                key={x}
                onClick={() => handleCeilRightClick(y, x)}
                onContextMenu={(e) => handleCeilLeftClick(e, y, x)}
                isVisible={boardMask[y][x].isVisible}
                status={boardMask[y][x].status}
              >
                {boardMask[y][x].isVisible &&
                  (ceilVal === 'M' ? '💣️' : ceilVal || '')}
                {!boardMask[y][x].isVisible &&
                  (boardMask[y][x].status === 'flag'
                    ? '🚩'
                    : boardMask[y][x].status === 'question'
                    ? '❓️'
                    : '')}
              </Board.Ceil>
            ))}
          </Board.Row>
        ))}
    </Board>
  )
}

GameBoard.propTypes = {
  options: PropTypes.shape({
    // < 3
    width: PropTypes.number,
    // > 3
    height: PropTypes.number,
    // < (width * height) / 2
    numOfMines: PropTypes.number,
  }),
}

export default GameBoard

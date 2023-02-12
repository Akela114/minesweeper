import { PropTypes } from 'prop-types'
import { icons } from '../../../../assets'
import { Board } from './GameBoard.styled'

const GameBoard = ({ board, boardMask, onCeilRightClick, onCeilLeftClick }) => {
  const width = board.length || 0
  const height = board[0]?.length || 0

  const fontSizeMultiplier =
    Math.trunc((16 / Math.min(height, width)) * 10) / 10

  return (
    <Board height={height} width={width}>
      {board &&
        board.map((row, y) => (
          <Board.Row key={y} height={height} width={width}>
            {row.map((ceilVal, x) => (
              <Board.Ceil
                key={x}
                onClick={() => onCeilRightClick(y, x)}
                onContextMenu={(e) => onCeilLeftClick(e, y, x)}
                isVisible={boardMask[y][x].isVisible}
                status={boardMask[y][x].status}
                isBomb={ceilVal === 'M'}
                height={height}
                width={width}
                fontSizeMultiplier={fontSizeMultiplier}
              >
                {boardMask[y][x].isVisible &&
                  (ceilVal === 'M' ? (
                    <Board.CeilImage
                      src={icons.bomb}
                      alt='Bomb Icon'
                      fontSizeMultiplier={fontSizeMultiplier}
                    />
                  ) : (
                    ceilVal || ''
                  ))}
                {!boardMask[y][x].isVisible &&
                  (boardMask[y][x].status === 'flag' ? (
                    <Board.CeilImage
                      src={icons.flag.black}
                      alt='Flag Icon'
                      fontSizeMultiplier={fontSizeMultiplier}
                    />
                  ) : boardMask[y][x].status === 'question' ? (
                    <Board.CeilImage
                      src={icons.question}
                      alt='Question Icon'
                      fontSizeMultiplier={fontSizeMultiplier}
                    />
                  ) : (
                    ''
                  ))}
              </Board.Ceil>
            ))}
          </Board.Row>
        ))}
    </Board>
  )
}

GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array),
  boardMask: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        isVisible: PropTypes.bool,
        status: PropTypes.oneOf(['none', 'flag', 'question']),
      }),
    ),
  ),
  onCeilRightClick: PropTypes.func,
  onCeilLeftClick: PropTypes.func,
}

export default GameBoard

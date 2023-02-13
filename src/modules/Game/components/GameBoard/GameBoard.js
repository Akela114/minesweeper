import { PropTypes } from 'prop-types'
import icons from '../../../../assets/icons'
import { Board } from './GameBoard.styled'

const GameBoard = ({
  board,
  boardMask,
  onCeilRightClick,
  onCeilLeftClick,
  onCeilWheelToggle,
  onCeilWheelUpdate,
}) => {
  const width = board.length || 0
  const height = board[0]?.length || 0

  const fontSizeMultiplier =
    Math.trunc((16 / Math.min(height, width)) * 10) / 10

  const handleMouseDown = (e, y, x) => {
    if (e.button === 1) {
      const startTime = new Date().getTime()

      const mouseupHandler = () => {
        const currentTime = new Date().getTime()
        if (currentTime - startTime < 1000) {
          onCeilWheelUpdate(y, x)
        } else {
          onCeilWheelToggle(y, x)
        }
        e.target.removeEventListener('mouseup', mouseupHandler)
        e.target.removeEventListener('mouseleave', mouseleaveHandler)
      }

      const mouseleaveHandler = () => {
        onCeilWheelToggle(y, x)
        e.target.removeEventListener('mouseup', mouseupHandler)
        e.target.removeEventListener('mouseleave', mouseleaveHandler)
      }

      e.target.addEventListener('mouseleave', mouseleaveHandler)
      e.target.addEventListener('mouseup', mouseupHandler)
      onCeilWheelToggle(y, x)
    }
  }

  return (
    <Board height={height} width={width}>
      {board &&
        board.map((row, y) => (
          <Board.Row key={y} height={height} width={width}>
            {row.map((ceilVal, x) => (
              <Board.Ceil
                key={x}
                onClick={() => onCeilRightClick(y, x)}
                onMouseDown={(e) => handleMouseDown(e, y, x)}
                onContextMenu={(e) => onCeilLeftClick(e, y, x)}
                isVisible={boardMask[y][x].isVisible}
                status={boardMask[y][x].status}
                isHighlighted={boardMask[y][x].isHighlighted}
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
        isHighlighted: PropTypes.bool,
      }),
    ),
  ),
  onCeilRightClick: PropTypes.func,
  onCeilWheelToggle: PropTypes.func,
  onCeilLeftClick: PropTypes.func,
  onCeilWheelUpdate: PropTypes.func,
}

export default GameBoard

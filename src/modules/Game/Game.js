import { PropTypes } from 'prop-types'
import { useState, useEffect } from 'react'
import generateGameBoard from './lib/generateGameBoard'
import createGameBoardMask from './lib/createGameBoardMask'
import updateGameBoardMask from './lib/updateGameBoardMask'
import toggleGameBoardMaskFlag from './lib/toggleGameBoardMaskFlag'
import {
  GameWrapper,
  GameHeader,
  GameInfo,
  GameActions,
  GameBody,
} from './Game.styled'
import GameBoard from './components/GameBoard'
import GameCounter from './components/GameCounter/GameCounter'
import GameTimer from './components/GameTimer/GameTimer'

const Game = ({ options: { width, height, numOfMines } }) => {
  const [gameInfo, setGameInfo] = useState({ status: 'none', time: 0 })
  const [board, setBoard] = useState(generateGameBoard(width, height, 0))
  const [boardMask, setBoardMask] = useState(createGameBoardMask(width, height))

  useEffect(() => {
    const ceilsLeft = boardMask.reduce(
      (res, row) =>
        res + row.reduce((res, ceil) => (!ceil.isVisible ? res + 1 : res), 0),
      0,
    )

    if (ceilsLeft === numOfMines)
      setGameInfo((prev) => ({ ...prev, status: 'win' }))
    if (ceilsLeft === 0) setGameInfo((prev) => ({ ...prev, status: 'defeat' }))
  }, [boardMask, numOfMines])

  const handleCeilRightClick = (y, x) => {
    if (boardMask[y][x].status === 'flag') {
      return
    }

    if (gameInfo.status === 'none') {
      const newBoard = generateGameBoard(width, height, numOfMines, [[y, x]])
      setBoard(newBoard)
      setGameInfo((prev) => ({ ...prev, status: 'active' }))

      setBoardMask((prev) => updateGameBoardMask(prev, newBoard, [[y, x]]))
      return
    }

    if (gameInfo.status === 'active') {
      setBoardMask((prev) => updateGameBoardMask(prev, board, [[y, x]]))
    }
  }

  const handleCeilLeftClick = (e, y, x) => {
    e.preventDefault()
    if (gameInfo.status === 'defeat' || gameInfo.status === 'win') return
    setBoardMask((prev) => toggleGameBoardMaskFlag(prev, [y, x]))
  }

  const handleGameWin = (time) => {
    setGameInfo((prev) => {
      if (prev.status === 'win') return { ...prev, time }
      return prev
    })
  }

  const counterValue =
    numOfMines -
    boardMask.reduce(
      (res, row) =>
        res +
        row.reduce((res, ceil) => (ceil.status === 'flag' ? res + 1 : res), 0),
      0,
    )

  return (
    <GameWrapper>
      <GameHeader>
        <GameInfo>
          <GameCounter value={counterValue} />
          <GameTimer status={gameInfo.status} onGameWin={handleGameWin} />
        </GameInfo>
        <GameActions>
          <GameActions.Button>рестарт</GameActions.Button>
          <GameActions.Button>настройки</GameActions.Button>
        </GameActions>
      </GameHeader>
      {gameInfo.status === 'win' && <div>Победа! {gameInfo.time}</div>}
      {gameInfo.status === 'defeat' && <div>Поражение!</div>}
      <GameBody>
        <GameBoard
          board={board}
          boardMask={boardMask}
          onCeilRightClick={handleCeilRightClick}
          onCeilLeftClick={handleCeilLeftClick}
        />
      </GameBody>
    </GameWrapper>
  )
}

Game.propTypes = {
  options: PropTypes.shape({
    // < 3
    width: PropTypes.number,
    // > 3
    height: PropTypes.number,
    // < (width * height) / 2
    numOfMines: PropTypes.number,
  }),
}

export default Game

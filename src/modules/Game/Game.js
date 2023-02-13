import { PropTypes } from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  GameNotification,
} from './Game.styled'
import GameBoard from './components/GameBoard'
import GameCounter from './components/GameCounter/GameCounter'
import GameTimer from './components/GameTimer/GameTimer'
import { leaderboardActions } from '../../store/slices/leaderboard'

const Game = ({ options: { difficulty, width, height, numOfMines } }) => {
  const dispatch = useDispatch()

  const leaderboardResults = useSelector((state) => state.results[difficulty])

  const [gameInfo, setGameInfo] = useState({
    status: 'none',
    time: 0,
    message: '',
  })
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
    const leaderboardIndex = leaderboardResults.findIndex(
      (val) => val.time > time,
    )

    const leaderboardPosition =
      leaderboardResults.length === 0
        ? 0
        : leaderboardIndex !== -1
        ? leaderboardIndex
        : leaderboardResults.length < 10
        ? leaderboardResults.length
        : -1

    if (leaderboardPosition !== -1) {
      dispatch(
        leaderboardActions.addResult({
          difficulty,
          date: new Date().toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }),
          time: Math.trunc(time * 10) / 10,
        }),
      )
    }

    setGameInfo((prev) => {
      if (prev.status === 'win')
        return {
          ...prev,
          time,
          message:
            leaderboardPosition !== -1
              ? `${leaderboardPosition + 1}-е место в таблице лидеров!`
              : '',
        }
      return prev
    })
  }

  const handleGameRestart = () => {
    setGameInfo({ status: 'none', time: 0, message: '' })
    setBoard(generateGameBoard(width, height, 0))
    setBoardMask(createGameBoardMask(width, height))
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
        {gameInfo.status === 'defeat' && (
          <GameNotification color='red'>ПОРАЖЕНИЕ!</GameNotification>
        )}
        {gameInfo.status === 'win' && (
          <GameNotification color='green'>
            ПОБЕДА! {gameInfo.message}
          </GameNotification>
        )}
        <GameActions status={gameInfo.status}>
          <GameActions.Button onClick={handleGameRestart}>
            Рестарт
          </GameActions.Button>
          <GameActions.Link to={'../'}>Меню</GameActions.Link>
        </GameActions>
      </GameHeader>
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
    difficulty: PropTypes.oneOf(['simple', 'hard', 'medium']),
    // < 3
    width: PropTypes.number,
    // > 3
    height: PropTypes.number,
    // < (width * height) / 2
    numOfMines: PropTypes.number,
  }),
}

export default Game

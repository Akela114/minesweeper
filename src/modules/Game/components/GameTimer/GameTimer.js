import { PropTypes } from 'prop-types'
import { useState, useEffect } from 'react'
import { TimerWrapper } from './GameTimer.style'

const GameTimer = ({ status, onGameWin }) => {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    let timerId

    const tickTimer = (startTime, currentInterval) => {
      setCurrentTime((prev) => prev + 1)

      const currentTime = new Date().getTime()
      const diff = currentTime - startTime - 1000
      const newInterval = currentInterval - diff

      timerId = setTimeout(() => {
        tickTimer(currentTime, newInterval)
      }, newInterval)
    }

    if (status === 'none') {
      setCurrentTime(0)
    }

    if (status === 'active') {
      const startTime = new Date().getTime()
      timerId = setTimeout(() => {
        tickTimer(startTime, 1000)
      }, 1000)
      return () => clearTimeout(timerId)
    }

    if (status === 'win') {
      onGameWin(currentTime)
    }
  }, [status])

  return (
    <TimerWrapper>🕑️ {currentTime.toString().padStart(3, '0')}</TimerWrapper>
  )
}

GameTimer.propTypes = {
  status: PropTypes.oneOf(['none', 'active', 'defeat', 'win']),
  onGameWin: PropTypes.func,
}

export default GameTimer

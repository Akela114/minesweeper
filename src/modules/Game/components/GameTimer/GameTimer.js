import { PropTypes } from 'prop-types'
import { useState, useEffect } from 'react'
import icons from '../../../../assets/icons'
import { TimerWrapper, TimerImage, TimerValue } from './GameTimer.style'

const GameTimer = ({ status, onGameWin }) => {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    let timerId

    const tickTimer = (startTime, currentInterval) => {
      setCurrentTime((prev) => prev + 0.1)

      const currentTime = new Date().getTime()
      const diff = currentTime - startTime - 100
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
        tickTimer(startTime, 100)
      }, 100)
      return () => clearTimeout(timerId)
    }

    if (status === 'win') {
      onGameWin(currentTime)
    }
  }, [status])

  const currentTimeAsString = currentTime.toString().split('.')
  currentTimeAsString[1] = currentTimeAsString[1]?.[0] || '0'

  return (
    <TimerWrapper>
      <TimerImage src={icons.clock} alt='Flag Icon' />{' '}
      <TimerValue>
        {currentTime < 100
          ? `${currentTimeAsString[0].padStart(2, '0')}.${
              currentTimeAsString[1]
            }`
          : currentTimeAsString[0]}
      </TimerValue>
    </TimerWrapper>
  )
}

GameTimer.propTypes = {
  status: PropTypes.oneOf(['none', 'active', 'defeat', 'win']),
  onGameWin: PropTypes.func,
}

export default GameTimer

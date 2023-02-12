import { PropTypes } from 'prop-types'
import { CounterWrapper } from './GameCounter.style'

const GameCounter = ({ value }) => {
  return <CounterWrapper>🚩 {value}</CounterWrapper>
}

GameCounter.propTypes = {
  value: PropTypes.number,
}

export default GameCounter

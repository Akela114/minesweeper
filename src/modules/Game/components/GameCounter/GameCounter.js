import { PropTypes } from 'prop-types'
import icons from '../../../../assets/icons'
import { CounterWrapper, CounterImage } from './GameCounter.style'

const GameCounter = ({ value }) => {
  return (
    <CounterWrapper>
      <CounterImage src={icons.flag.white} alt='Flag Icon' />
      {value}
    </CounterWrapper>
  )
}

GameCounter.propTypes = {
  value: PropTypes.number,
}

export default GameCounter

import { PropTypes } from 'prop-types'
import icons from '../../../../assets/icons'
import { ItemWrapper, Title, Info, InfoImg } from './ListItem.styled'

const ListItem = ({ bgColor, linkDest, itemData }) => {
  return (
    <ItemWrapper $bgColor={bgColor} to={linkDest}>
      <Title>{itemData.title}</Title>
      <Info>
        <InfoImg src={icons.board} alt='Board Icon' />
        {itemData.boardSize}
      </Info>
      <Info>
        <InfoImg src={icons.clock} alt='Clock Icon' />
        {itemData.numOfMines} мин
      </Info>
    </ItemWrapper>
  )
}

ListItem.propTypes = {
  bgColor: PropTypes.string,
  linkDest: PropTypes.string,
  itemData: PropTypes.shape({
    title: PropTypes.string,
    boardSize: PropTypes.string,
    numOfMines: PropTypes.number,
  }),
}

export default ListItem

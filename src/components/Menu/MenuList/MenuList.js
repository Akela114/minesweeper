import ListItem from './ListItem/ListItem'
import { ListWrapper } from './MenuList.styled'

const MenuList = () => {
  return (
    <ListWrapper>
      <ListItem
        bgColor='green'
        linkDest='simple'
        itemData={{ title: 'Простой', boardSize: '8x8', numOfMines: 10 }}
      />
      <ListItem
        bgColor='blue'
        linkDest='medium'
        itemData={{ title: 'Средний', boardSize: '16x16', numOfMines: 40 }}
      />
      <ListItem
        bgColor='red'
        linkDest='hard'
        itemData={{ title: 'Сложный', boardSize: '32x16', numOfMines: 100 }}
      />
    </ListWrapper>
  )
}

export default MenuList

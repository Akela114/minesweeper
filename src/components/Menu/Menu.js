import { MenuWrapper, MenuTitle } from './Menu.styled'
import MenuList from './MenuList/MenuList'

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuTitle>Выберите уровень сложности</MenuTitle>
      <MenuList />
    </MenuWrapper>
  )
}

export default Menu

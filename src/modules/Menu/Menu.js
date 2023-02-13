import { MenuWrapper } from './Menu.styled'
import MenuList from './components/MenuList/MenuList'

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuWrapper.Title>Выберите уровень сложности</MenuWrapper.Title>
      <MenuList />
    </MenuWrapper>
  )
}

export default Menu

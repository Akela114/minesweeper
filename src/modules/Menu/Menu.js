import { useNavigate } from 'react-router-dom'
import icons from '../../assets/icons'
import {
  MenuWrapper,
  MenuHeader,
  MenuActions,
  MenuBody,
  MenuList,
} from './Menu.styled'

const Menu = () => {
  const navigate = useNavigate()

  return (
    <MenuWrapper>
      <MenuHeader>
        <MenuActions>
          <MenuActions.Button>Таблица лидеров</MenuActions.Button>
        </MenuActions>
      </MenuHeader>
      <MenuBody>
        <MenuBody.Title>Выберите уровень сложности</MenuBody.Title>
        <MenuList>
          <MenuList.Item bgColor='green' onClick={() => navigate('simple')}>
            <MenuList.Item.Title>Простой</MenuList.Item.Title>
            <MenuList.Item.Info>
              <MenuList.Item.InfoImg src={icons.board} alt='Board Icon' />
              8x8
            </MenuList.Item.Info>
            <MenuList.Item.Info>
              <MenuList.Item.InfoImg src={icons.clock} alt='Clock Icon' />
              10 мин
            </MenuList.Item.Info>
          </MenuList.Item>
          <MenuList.Item bgColor='blue' onClick={() => navigate('medium')}>
            <MenuList.Item.Title>Средний</MenuList.Item.Title>
            <MenuList.Item.Info>
              <MenuList.Item.InfoImg src={icons.board} alt='Board Icon' />
              16x16
            </MenuList.Item.Info>
            <MenuList.Item.Info>
              <MenuList.Item.InfoImg src={icons.clock} alt='Clock Icon' />
              40 мин
            </MenuList.Item.Info>
          </MenuList.Item>
          <MenuList.Item bgColor='red' onClick={() => navigate('hard')}>
            <MenuList.Item.Title>Сложный</MenuList.Item.Title>
            <MenuList.Item.Info>
              <MenuList.Item.InfoImg src={icons.board} alt='Board Icon' />
              32x16
            </MenuList.Item.Info>
            <MenuList.Item.Info>
              <MenuList.Item.InfoImg src={icons.clock} alt='Clock Icon' />
              100 мин
            </MenuList.Item.Info>
          </MenuList.Item>
        </MenuList>
      </MenuBody>
    </MenuWrapper>
  )
}

export default Menu
